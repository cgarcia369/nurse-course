"use client";
import React, { useState } from "react";
import Quiz from "../quiz/Quiz";
import { CourseSharedProps, CourseStepBase } from "./Course";
import { StepsType } from "@/enums";
import CourseStepLayout from "./CourseStepLayout";
import { toast } from "react-toastify";

const QuizAny = Quiz as any;
export type QuizConfig = {
  quizTitle: string;
  quizSynopsis: string;
  progressBarColor: string;
  nrOfQuestions: string;
  questions: Array<{
    question: string;
    questionType: string;
    questionPic?: string;
    answerSelectionType: string;
    answers: Array<string>;
    correctAnswer: string | Array<number>;
    messageForCorrectAnswer: string;
    messageForIncorrectAnswer: string;
    explanation: string;
    point: string;
  }>;
};
export type CourseStepQuizType = CourseStepBase & {
  type: StepsType.QUIZ;
  config: QuizConfig;
};
type CourseStepQuizProps = CourseStepQuizType & CourseSharedProps;
const CourseStepQuiz = ({
  isFirstStep,
  isLastStep,
  isAlreadyCompleted,
  onClickPrev,
  onClickNext,
  config
}: CourseStepQuizProps) => {
  const [disabled, setDisabled] = useState(true);
  const [showStartAgain, setShowStartAgain] = useState(false);
  const [completeAgain, setCompleteAgain] = useState(false);
  const [key, setKey] = useState(0);
  return (
    <>
      <CourseStepLayout
        onClickPrev={
          isFirstStep
            ? undefined
            : () => {
                onClickPrev?.();
              }
        }
        nextText={isLastStep ? "Finalizar curso" : "Siguiente"}
        onClickNext={onClickNext}
        isDisabled={disabled && !isAlreadyCompleted}
      >
        {isAlreadyCompleted && !completeAgain ? (
          <div className="text-center text-2xl font-bold m-auto">
            ¡Ya has completado este cuestionario!
            <button
              className="ml-2 text-blue-500 hover:underline"
              onClick={() => {
                setCompleteAgain(true);
                setDisabled(false);
                setShowStartAgain(false);
              }}
            >
              Completar de nuevo
            </button>
          </div>
        ) : (
          <>
            {showStartAgain && (
              <div className="text-center text-2xl font-bold mb-4">
                ¿Quieres empezar de nuevo el cuestionario?
                <button
                  className="ml-2 text-blue-500 hover:underline"
                  onClick={() => {
                    setKey((prevKey) => prevKey + 1); // Reset the quiz
                    setDisabled(true);
                    setShowStartAgain(false);
                  }}
                >
                  Empezar de nuevo
                </button>
              </div>
            )}
            <QuizAny
              quiz={config}
              shuffle={true}
              key={key}
              onComplete={({ totalPoints, correctPoints }: any) => {
                if (correctPoints / totalPoints >= 0.6) {
                  toast.success("¡Has completado el cuestionario correctamente!");
                  setDisabled(false);
                  return;
                }
                if (!isAlreadyCompleted) {
                  toast.error(
                    "Lo siento, no has alcanzado la puntuación mínima del 80% para completar el cuestionario por favor completa de nuevo el cuestionario."
                  );
                }
                setKey((prevKey) => prevKey + 1); // Reset the quiz
                setDisabled(true);
                // setShowStartAgain(false);
                // setShowStartAgain(true);
                // setDisabled(true);
              }}
            />
          </>
        )}
      </CourseStepLayout>
    </>
  );
};

export default CourseStepQuiz;
