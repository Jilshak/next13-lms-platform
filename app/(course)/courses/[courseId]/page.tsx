import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { card_items } from '@/Dummy/card_items'

const CourseIdPage = async ({
  params
}: {
  params: { courseId: string; }
}) => {
  // const course = await db.course.findUnique({
  //   where: {
  //     id: params.courseId,
  //   },
  //   include: {
  //     chapters: {
  //       where: {
  //         isPublished: true,
  //       },
  //       orderBy: {
  //         position: "asc"
  //       }
  //     }
  //   }
  // });

  const course = card_items

  if (!course) {
    return redirect("/");
  }

  return redirect(`/courses/${course[0].id}/chapters/${course[0].chapters[0].id}`);
}
 
export default CourseIdPage;