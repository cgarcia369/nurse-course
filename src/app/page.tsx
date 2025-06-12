import Course from "@/components/course/Course";
import { getSteps } from "@/lib/steps";
import { authWithUser } from "@/lib/user";
export const dynamic = "force-dynamic"; // Force dynamic rendering
export default async function Home() {
  const currentUserFull = await authWithUser();
  const steps = await getSteps();
  return (
    <Course
      steps={steps}
      currentStepIndex={currentUserFull.currentSection}
      lastStepIndex={currentUserFull.lastSection}
    />
  );
}
