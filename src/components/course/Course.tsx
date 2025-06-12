import React from "react";
import CourseStepVideo, { CourseStepVideoType } from "./CourseStepVideo";
import prisma from "@/lib/prisma";
import CourseStepLink, { CourseStepLinkType } from "@/components/course/CourseStepLink";
import { revalidateTag } from "next/cache";
import CourseCertificate from "@/components/course/CourseCertificate";
import { authWithUser } from "@/lib/user";
import CourseStepQuiz, { CourseStepQuizType } from "./CourseStepQuiz";

export type CourseSharedProps = {
  onClickNext: () => Promise<void>;
  onClickPrev: () => Promise<void>;
};
export type CourseStepBase = {
  title: string;
  isAlreadyCompleted?: boolean;
  isCurrentStep?: boolean;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  section: string;
};
export type CourseStep = CourseStepVideoType | CourseStepLinkType | CourseStepQuizType;
export type CourseProps = {
  steps: CourseStep[];
  currentStepIndex: number;
  lastStepIndex: number;
};
const Course = async ({ currentStepIndex, lastStepIndex, steps }: CourseProps) => {
  const user = await authWithUser();
  const currentStep = steps[currentStepIndex];

  const handleNextStep = async () => {
    "use server";
    const isIncompleteSection = currentStepIndex === lastStepIndex;
    await prisma.user.update({
      where: {
        id: user?.id
      },
      data: {
        ...(isIncompleteSection
          ? {
              lastSection: lastStepIndex + 1
            }
          : {}),
        currentSection: currentStepIndex + 1
      }
    });
    revalidateTag("getUser");
  };
  const handlePrevStep = async () => {
    "use server";
    const newStepIndex = currentStepIndex - 1;
    if (newStepIndex < 0) {
      return;
    }
    await prisma.user.update({
      where: {
        id: user?.id
      },
      data: {
        currentSection: newStepIndex
      }
    });
    revalidateTag("getUser");
  };
  return (
    <>
      {{
        ["video"]: (
          <CourseStepVideo
            {...(currentStep as CourseStepVideoType)}
            onClickNext={handleNextStep}
            onClickPrev={handlePrevStep}
          />
        ),
        ["link"]: (
          <CourseStepLink
            {...(currentStep as CourseStepLinkType)}
            onClickNext={handleNextStep}
            onClickPrev={handlePrevStep}
          />
        ),
        ["quiz"]: (
          <CourseStepQuiz
            {...(currentStep as CourseStepQuizType)}
            onClickNext={handleNextStep}
            onClickPrev={handlePrevStep}
          />
        )
      }[currentStep?.type] || <CourseCertificate onClickNext={handleNextStep} onClickPrev={handlePrevStep} />}
    </>
  );
};

export default Course;
