import React, { useEffect, useRef, useState } from "react";
import { Check, CheckCircle2, CircleHelp, ListFilter, X, XCircle } from "lucide-react";
import QuizResultFilter from "./core-components/QuizResultFilter";
import { rawMarkup } from "./core-components/helpers";

function QuizResults({ questions, correct, userInput, correctPoints, totalPoints, appLocale }) {
  const [filter, setFilter] = useState("all");
  const headingRef = useRef(null);
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);
  const reviewedQuestions = questions.map((question, index) => ({
    question,
    index,
    status: userInput[index] === undefined ? "unanswered" : correct.includes(index) ? "correct" : "incorrect"
  }));
  const counts = {
    all: questions.length,
    correct: reviewedQuestions.filter(({ status }) => status === "correct").length,
    incorrect: reviewedQuestions.filter(({ status }) => status === "incorrect").length,
    unanswered: reviewedQuestions.filter(({ status }) => status === "unanswered").length
  };
  const visibleQuestions = reviewedQuestions.filter(({ status }) => filter === "all" || status === filter);
  const percentage = totalPoints > 0 ? Math.round((correctPoints / totalPoints) * 100) : null;
  const statusLabels = {
    correct: appLocale.resultStatusCorrect,
    incorrect: appLocale.resultStatusIncorrect,
    unanswered: appLocale.resultStatusUnanswered
  };

  return (
    <section className="quiz-results" aria-label={appLocale.resultTitle}>
      <div className="results-summary">
        <div className="results-summary-heading">
          <span className="results-complete-icon">
            <CheckCircle2 size={24} aria-hidden="true" />
          </span>
          <div>
            <p className="results-eyebrow">{appLocale.resultComplete}</p>
            <h2 tabIndex={-1} ref={headingRef}>
              {appLocale.resultTitle}
            </h2>
          </div>
        </div>
        <div className="results-score-row">
          <div className="results-score">
            <strong>{percentage === null ? "—" : `${percentage}%`}</strong>
            <span>{appLocale.resultScoreLabel}</span>
          </div>
          <div className="results-score-detail">
            <p>
              {appLocale.resultPagePoint
                .replace("<correctPoints>", correctPoints)
                .replace("<totalPoints>", totalPoints)}
            </p>
            <div className="results-score-track" aria-hidden="true">
              <span style={{ width: `${percentage ?? 0}%` }} />
            </div>
            <p>{appLocale.resultReviewHint}</p>
          </div>
        </div>
        <dl className="results-stats">
          {[
            ["correct", CheckCircle2, appLocale.resultFilterCorrect],
            ["incorrect", XCircle, appLocale.resultFilterIncorrect],
            ["unanswered", CircleHelp, appLocale.resultFilterUnanswered]
          ].map(([status, Icon, label]) => (
            <div key={status} className={`results-stat results-stat-${status}`}>
              <dt>
                <Icon size={16} aria-hidden="true" />
                {label}
              </dt>
              <dd>{counts[status]}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="results-review-heading">
        <h3>{appLocale.resultReviewTitle}</h3>
        <span aria-live="polite">
          {visibleQuestions.length} / {questions.length}
        </span>
      </div>
      <QuizResultFilter filteredValue={filter} handleChange={setFilter} appLocale={appLocale} counts={counts} />
      <div className="results-question-list">
        {visibleQuestions.length === 0 && (
          <div className="results-empty" role="status">
            <ListFilter size={28} aria-hidden="true" />
            <h4>{appLocale.resultEmptyTitle}</h4>
            <p>{appLocale.resultEmptyHint}</p>
          </div>
        )}
        {visibleQuestions.map(({ question, index, status }) => (
          <article className="result-answer-wrapper" key={index}>
            <div className="result-question-meta">
              <span>
                {appLocale.question} {question.questionIndex ?? index + 1}
              </span>
              <span className={`result-status ${status}`}>
                {status === "correct" ? (
                  <Check size={14} aria-hidden="true" />
                ) : status === "incorrect" ? (
                  <X size={14} aria-hidden="true" />
                ) : (
                  <CircleHelp size={14} aria-hidden="true" />
                )}
                {statusLabels[status]}
              </span>
            </div>
            <h4 dangerouslySetInnerHTML={rawMarkup(question.question)} />
            <p className="result-question-points">
              {appLocale.marksOfQuestion.replace("<marks>", question.point ?? 0)}
            </p>
            {question.questionPic && <img src={question.questionPic} alt={appLocale.question} />}
            <ul className="result-answer">
              {question.answers.map((answer, answerIndex) => {
                const isMultiple = question.answerSelectionType === "multiple";
                const isCorrect = isMultiple
                  ? question.correctAnswer.includes(answerIndex + 1)
                  : `${question.correctAnswer}` === `${answerIndex + 1}`;
                const isSelected = isMultiple
                  ? userInput[index]?.includes(answerIndex + 1)
                  : userInput[index] === answerIndex + 1;
                return (
                  <li
                    key={answerIndex}
                    className={`result-option ${isCorrect ? "is-correct" : isSelected ? "is-incorrect" : ""}`}
                  >
                    <span className="result-option-marker" aria-hidden="true">
                      {isCorrect ? (
                        <Check size={16} />
                      ) : isSelected ? (
                        <X size={16} />
                      ) : (
                        String.fromCharCode(65 + answerIndex)
                      )}
                    </span>
                    <div className="result-option-content">
                      {question.questionType === "photo" ? (
                        <img src={answer} alt={`${appLocale.resultAnswerLabel} ${answerIndex + 1}`} />
                      ) : (
                        <span>{answer}</span>
                      )}
                      {(isCorrect || isSelected) && (
                        <span className="result-option-label">
                          {[isSelected && appLocale.resultYourAnswer, isCorrect && appLocale.resultCorrectAnswer]
                            .filter(Boolean)
                            .join(" · ")}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            {question.explanation && (
              <div className="result-explanation">
                <strong>{appLocale.resultExplanation}</strong>
                <p>{question.explanation}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default QuizResults;
