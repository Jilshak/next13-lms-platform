import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";
import { DashboardItems } from '@/Dummy/dashboard_items'
import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";

import { InfoCard } from "./_components/info-card";

export default async function Dashboard() {
  const userId  = '1';

  if (!userId) {
    return redirect("/");
  }

  // const {
  //   completedCourses,
  //   coursesInProgress
  // } = await getDashboardCourses(userId);

  const dashboardItems = DashboardItems

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
       <InfoCard
          icon={Clock}
          label="In Progress"
          numberOfItems={dashboardItems.length}
       />
       <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberOfItems={dashboardItems.length}
          variant="success"
       />
      </div>
      <CoursesList
        items={[...dashboardItems]}
      />
    </div>
  )
}
