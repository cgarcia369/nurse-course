"use client";
import React, { useState } from "react";
import Quiz from "../quiz/Quiz";
import { CourseSharedProps, CourseStepBase } from "./Course";
import { StepsType } from "@/enums";
import CourseStepLayout from "./CourseStepLayout";
import { toast } from "react-toastify";
import { Button } from "../ui/button";

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
  const [passed, setPassed] = useState(false);
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
            <QuizAny
              quiz={config}
              shuffle={true}
              key={key}
              onComplete={({ totalPoints, correctPoints }: any) => {
                const hasPassed = totalPoints > 0 && correctPoints / totalPoints >= 0.6;
                setPassed(hasPassed);
                setShowStartAgain(true);
                setDisabled(!hasPassed);
                if (hasPassed) {
                  toast.success("¡Has completado el cuestionario correctamente!");
                  return;
                }
                if (!isAlreadyCompleted) {
                  toast.error(
                    "Necesitas al menos un 60% para completar el cuestionario. Revisa tus respuestas e inténtalo de nuevo."
                  );
                }
              }}
            />
            {showStartAgain && (
              <div className="w-full max-w-[640px] rounded-xl border bg-muted/40 p-5 mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 text-sm">
                  <p className="font-semibold">{passed ? "¡Buen trabajo! Puedes continuar." : "Sigue practicando"}</p>
                  <p className="text-muted-foreground mt-1">
                    {passed
                      ? "También puedes repetir el cuestionario para reforzar lo aprendido."
                      : "Necesitas al menos un 60%. Revisa las explicaciones antes de volver a intentarlo."}
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setKey((prevKey) => prevKey + 1);
                    setDisabled(true);
                    setShowStartAgain(false);
                  }}
                >
                  Volver a intentar
                </Button>
              </div>
            )}
          </>
        )}
      </CourseStepLayout>
    </>
  );
};

export default CourseStepQuiz;
