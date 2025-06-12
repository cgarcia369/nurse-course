import React from "react";
import NavBarProfile from "@/components/navbar/NavBarProfile";
import { Progress } from "@/components/ui/progress";
import { authWithUser } from "@/lib/user";
import { steps } from "@/constants/steps";

const NavBar = async () => {
  const { lastSection, currentSection } = await authWithUser();
  const maxSteps = steps.length;
  const progressValue = lastSection ? Math.floor((lastSection / maxSteps) * 100) : 0;
  const title = steps[currentSection]?.title;

  return (
    <header className="bg-white dark:bg-gray-900 flex w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col w-full">
        <div className="flex h-16 items-center justify-between w-full gap-x-12">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-300" href="#">
              <span className="text-xl text-primary">Curso de enfermería</span>
            </a>
          </div>

          <div className="flex-1 md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:flex flex-1">
              <div className="flex flex-col items-center text-sm w-full">
                <p className="text-xl mb-2 text-gray-800">
                  Progreso {progressValue}% <span className="text-lg"> {title ? `- Item actual: ${title}` : ""}</span>
                </p>
                <Progress value={progressValue} />
              </div>
            </nav>
            <NavBarProfile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
