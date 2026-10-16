import NavBar from "@/components/navbar/NavBar";
import SideBarWrapper from "@/components/sidebar/SideBarWrapper";

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row w-full h-full">
      <SideBarWrapper />
      <div className="flex flex-col flex-1 min-h-dvh">
        <NavBar />
        <div className="p-12 flex-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
}
