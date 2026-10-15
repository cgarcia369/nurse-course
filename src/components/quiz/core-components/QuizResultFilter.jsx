import React from "react";

function QuizResultFilter({ filteredValue, handleChange, appLocale, counts }) {
  const options = {
    all: appLocale.resultFilterAll,
    correct: appLocale.resultFilterCorrect,
    incorrect: appLocale.resultFilterIncorrect,
    unanswered: appLocale.resultFilterUnanswered
  };

  return (
    <div className="quiz-result-filter" role="group" aria-label={appLocale.resultFilterLabel}>
      {Object.entries(options).map(([value, label]) => (
        <button
          key={value}
          type="button"
          aria-pressed={filteredValue === value}
          aria-label={`${label}: ${counts[value]}`}
          onClick={() => handleChange(value)}
        >
          {label}
          <span>{counts[value]}</span>
        </button>
      ))}
    </div>
  );
}

export default QuizResultFilter;
