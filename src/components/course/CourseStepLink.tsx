"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CourseStepLayout from "@/components/course/CourseStepLayout";
import { CourseSharedProps, CourseStepBase } from "@/components/course/Course";
import { StepsType } from "@/enums";

export type CourseStepLinkType = CourseStepBase & {
  type: StepsType.LINK;
  url: string;
};
type CourseStepLinkProps = CourseSharedProps & CourseStepLinkType;

const CourseStepLink = ({
  onClickNext,
  url,
  isAlreadyCompleted,
  isLastStep,
  isFirstStep,
  onClickPrev,
  title
}: CourseStepLinkProps) => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setDisabled(true);
  }, [url]);
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
        key={title}
      >
        <Link
          href={url}
          onClick={() => {
            setDisabled(false);
          }}
          target={`_blank`}
          className="text-2xl text-center text-primary m-auto underline underline-offset-4 decoration-secondary hover:decoration-primary transition-all"
        >
          Haz click para abrir recurso
        </Link>
      </CourseStepLayout>
    </>
  );
};

export default CourseStepLink;
