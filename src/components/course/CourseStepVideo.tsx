"use client";
import React, { useEffect, useState } from "react";
import CourseStepLayout from "@/components/course/CourseStepLayout";
import dynamic from "next/dynamic";
import { CourseSharedProps, CourseStepBase } from "@/components/course/Course";
import { StepsType } from "@/enums";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
export type CourseStepVideoType = CourseStepBase & {
  type: StepsType.VIDEO;
  url: string;
};
type CourseStepVideoProps = CourseSharedProps & CourseStepVideoType;

const CourseStepVideo = ({
  onClickNext,
  url,
  title,
  isAlreadyCompleted,
  onClickPrev,
  isLastStep,
  isFirstStep
}: CourseStepVideoProps) => {
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
        key={url}
      >
        <div className="relative pt-[35%] w-full m-auto">
          <ReactPlayer
            key={url}
            fallback={
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Cargando video...</p>
              </div>
            }
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
            controls={false}
            url={url}
            loop={false}
            onEnded={() => {
              setDisabled(false);
            }}
          />
        </div>
      </CourseStepLayout>
    </>
  );
};

export default CourseStepVideo;
