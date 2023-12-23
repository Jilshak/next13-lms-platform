import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";

const TeacherLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const userId = '1'

  if (!isTeacher(userId)) {
    return redirect("/");
  }

  return <>{children}</>
}
 
export default TeacherLayout;