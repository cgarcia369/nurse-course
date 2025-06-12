import React, { ReactNode } from "react";
import { Button } from "../ui/button";

type CourseStepLayoutProps = {
  children: ReactNode;
  nextText?: string;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  isDisabled?: boolean;
};

const CourseStepLayout = ({
  children,
  isDisabled,
  onClickNext,
  onClickPrev,
  nextText = "Siguiente"
}: CourseStepLayoutProps) => {
  return (
    <>
      <div className="flex flex-col w-full flex-1">
        <div className="flex-1 flex flex-col items-center">{children}</div>
        <div className="flex w-full gap-x-6 mt-4">
          {Boolean(onClickPrev) && (
            <Button onClick={onClickPrev} className="flex-1">
              Atrás
            </Button>
          )}
          {Boolean(onClickNext) && (
            <Button
              className="flex-1"
              variant={isDisabled ? "outline" : "default"}
              onClick={onClickNext}
              disabled={isDisabled}
            >
              {nextText}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseStepLayout;
