
"use client"

import { redirect } from "next/navigation";
import { CourseSidebar } from "./_components/course-sidebar";
import { CourseNavbar } from "./_components/course-navbar";
import { card_items } from '@/Dummy/card_items'
import { AuthProvider } from "@/components/providers/auth-provider";

const CourseLayout = ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {

  const course = card_items

  if (!course) {
    return redirect("/");
  }


  return (
    <AuthProvider>
      <div className="h-full">
        <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
          <CourseNavbar
            course={course[0]}
            progressCount={course[0].progress}
          />
        </div>
        <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
          <CourseSidebar
            course={course[0]}
            progressCount={course[0].progress}
          />
        </div>
        <main className="md:pl-80 pt-[80px] h-full">
          {children}
        </main>
      </div>
    </AuthProvider>
  )
}

export default CourseLayout