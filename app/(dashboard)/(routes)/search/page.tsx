
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";
import { CoursesList } from "@/components/courses-list";

import { Categories } from "./_components/categories";
import { card_items as courses } from '@/Dummy/card_items'



interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  }
};

const SearchPage =  ({
  searchParams
}: SearchPageProps) => {
  const userId = '1';

  if (!userId) {
    return redirect("/");
  }

  // const categories = await db.category.findMany({
  //   orderBy: {
  //     name: "asc"
  //   }
  // });


  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        {/* <Categories
          items={categories}
        /> */}
        <CoursesList items={courses} />
      </div>
    </>
   );
}
 
export default SearchPage;