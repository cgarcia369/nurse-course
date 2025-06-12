"use client";
import * as React from "react";
import { BookOpen, ExternalLink, FileQuestion, GraduationCap, PlayCircle, ChevronDown, Lock } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CourseStep } from "../course/Course";
import { StepsType } from "@/enums";
import { useEffect } from "react";

function groupBySection(steps: CourseStep[]) {
  const sections: { [key: string]: CourseStep[] } = {};

  steps.forEach((step) => {
    if (!sections[step.section]) {
      sections[step.section] = [];
    }
    sections[step.section].push(step);
  });

  return Object.entries(sections).map(([title, steps]) => ({
    title,
    steps,
    isExpanded: title.includes("Section 1") // Expand first section by default
  }));
}

function isStepLocked(step: CourseStep, allSteps: CourseStep[]): boolean {
  const currentIndex = allSteps.findIndex((s) => s.title === step.title);
  if (currentIndex === 0) return false;

  const previousStep = allSteps[currentIndex - 1];
  return !previousStep?.isAlreadyCompleted;
}

interface CourseSidebarProps {
  steps: CourseStep[];
  onStepClick: (index: number) => Promise<void>;
}

export function CourseSidebar({ steps, onStepClick }: CourseSidebarProps) {
  const [sections, setSections] = React.useState(groupBySection(steps));
  useEffect(() => {
    setSections(groupBySection(steps));
  }, [steps]);

  const toggleSection = (sectionTitle: string) => {
    setSections(
      sections.map((section) =>
        section.title === sectionTitle ? { ...section, isExpanded: !section.isExpanded } : section
      )
    );
  };

  const handleStepClick = (step: CourseStep) => {
    const locked = isStepLocked(step, steps);
    if (!locked) {
      const index = steps.findIndex(
        (s) => s.title === step.title && s.section === step.section && s.type === step.type
      );
      onStepClick?.(index);
    }
  };

  const getStepIcon = (step: CourseStep, locked = false) => {
    if (locked) return <Lock className="h-4 w-4 text-muted-foreground" />;

    switch (step.type) {
      case StepsType.VIDEO:
        return <PlayCircle className="h-4 w-4 text-red-500" />;
      case StepsType.LINK:
        return <ExternalLink className="h-4 w-4 text-blue-500" />;
      case StepsType.QUIZ:
        return <FileQuestion className="h-4 w-4 text-amber-500" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getStepStatusBadge = (step: CourseStep, locked = false) => {
    if (locked) {
      return (
        <Badge variant="outline" className="px-1 py-0 text-xs text-muted-foreground">
          Bloqueado
        </Badge>
      );
    }

    if (step.isAlreadyCompleted) {
      return (
        <Badge variant="outline" className="px-1 py-0 text-xs bg-green-50 text-green-600 border-green-200">
          Completado
        </Badge>
      );
    }

    if (step.isCurrentStep) {
      return (
        <Badge variant="outline" className="px-1 py-0 text-xs bg-blue-50 text-blue-600 border-blue-200">
          Actual
        </Badge>
      );
    }

    return null;
  };

  const completedSteps = steps.filter((step) => step.isAlreadyCompleted).length;
  const totalSteps = steps.length;

  const lastStep = steps[steps.length - 1];
  const isCertificateAvailable = lastStep?.isAlreadyCompleted || false;

  return (
    <SidebarProvider className="min-w-[400px] w-[400px]">
      <Sidebar className="border-r min-w-[400px] w-[400px]">
        <SidebarHeader className="border-b">
          <div className="flex items-center gap-2 px-4 py-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <div>
              <h2 className="text-lg font-semibold">Curso de enfermería</h2>
              <p className="text-xs text-muted-foreground">
                Progreso: {completedSteps}/{totalSteps} pasos completados
              </p>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {sections.map((section) => (
              <Collapsible key={section.title} defaultOpen={section.isExpanded} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton onClick={() => toggleSection(section.title)} className="font-medium">
                      <BookOpen className="h-4 w-4" />
                      <span>{section.title}</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=closed]/collapsible:rotate-[-90deg]" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {section.steps.map((step) => {
                      const locked = isStepLocked(step, steps);
                      const isActive = step.isCurrentStep;

                      return (
                        <SidebarMenuSubItem key={`${step.section}-${step.title}`}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <SidebarMenuSubButton
                                asChild
                                isActive={isActive}
                                className={cn(
                                  "justify-between cursor-pointer",
                                  locked && "text-muted-foreground opacity-70 cursor-not-allowed"
                                )}
                                aria-disabled={locked}
                                onClick={() => handleStepClick(step)}
                              >
                                <div className="flex w-full items-center justify-between">
                                  <div className="flex items-center gap-2 min-w-0 flex-1">
                                    {getStepIcon(step, locked)}
                                    <span className={cn("truncate", step.isAlreadyCompleted && "font-medium")}>
                                      {step.title}
                                    </span>
                                  </div>
                                  <div className="flex-shrink-0 ml-2">{getStepStatusBadge(step, locked)}</div>
                                </div>
                              </SidebarMenuSubButton>
                            </TooltipTrigger>
                            {locked && (
                              <TooltipContent side="right">
                                <p>Complete the previous step to unlock</p>
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            ))}

            <SidebarMenuItem className="mt-4 border-t pt-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton
                    className={cn(
                      "font-medium justify-between",
                      !isCertificateAvailable && "text-muted-foreground opacity-70 cursor-not-allowed"
                    )}
                    onClick={() => {
                      if (isCertificateAvailable) {
                        onStepClick?.(steps.length);
                      }
                    }}
                    aria-disabled={!isCertificateAvailable}
                  >
                    <div className="flex items-center gap-2">
                      {isCertificateAvailable ? (
                        <GraduationCap className="h-4 w-4 text-green-500" />
                      ) : (
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span>Certificado</span>
                    </div>
                    {isCertificateAvailable ? (
                      <Badge
                        variant="outline"
                        className="px-1 py-0 text-xs bg-green-50 text-green-600 border-green-200"
                      >
                        Disponible
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="px-1 py-0 text-xs text-muted-foreground">
                        Bloqueado
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </TooltipTrigger>
              </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  );
}
