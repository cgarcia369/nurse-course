import { authWithUser } from "@/lib/user";
import { steps } from "@/constants/steps";
import { CourseStep } from "@/components/course/Course";

export const getSteps = async () => {
  const currentUserFull = await authWithUser();
  return steps.map((x, i, array) => ({
    ...(x as CourseStep),
    isAlreadyCompleted: i < currentUserFull.lastSection,
    isFirstStep: i === 0,
    isLastStep: i === array.length - 1,
    isCurrentStep: i === currentUserFull.lastSection
  }));
};
