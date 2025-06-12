import React from "react";
import { CourseSidebar } from "@/components/sidebar/SideBar";
import { getSteps } from "@/lib/steps";
import { CourseStep } from "@/components/course/Course";
import prisma from "@/lib/prisma";
import { authWithUser } from "@/lib/user";
import { revalidateTag } from "next/cache";

const SideBarWrapper = async () => {
  const user = await authWithUser();
  const steps = await getSteps();

  const handleStepClick = async (index: number) => {
    "use server";
    await prisma.user.update({
      where: {
        id: user?.id
      },
      data: {
        currentSection: index
      }
    });
    revalidateTag("getUser");
  };
  console.log(steps);
  return (
    <>
      <CourseSidebar steps={steps} onStepClick={handleStepClick} />
    </>
  );
};

export default SideBarWrapper;
