
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";

import { CourseSidebar } from "./_components/course-sidebar";
import { CourseNavbar } from "./_components/course-navbar";
import { card_items } from '@/Dummy/card_items'

const CourseLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  const  userId  = '1';

  if (!userId) {
    return redirect("/")
  }

  const course = card_items

  // const course = await db.course.findUnique({
  //   where: {
  //     id: params.courseId,
  //   },
  //   include: {
  //     chapters: {
  //       where: {
  //         isPublished: true,
  //       },
  //       include: {
  //         userProgress: {
  //           where: {
  //             userId,
  //           }
  //         }
  //       },
  //       orderBy: {
  //         position: "asc"
  //       }
  //     },
  //   },
  // });

  if (!course) {
    return redirect("/");
  }

  // const progressCount = await getProgress(userId, course.id);

  return (
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
  )
}

export default CourseLayout