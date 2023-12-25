"use client";

import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { SearchInput } from "./search-input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axios from "axios";
import { useRouter } from "next/navigation";


export const NavbarRoutes = () => {
  const userId = '1';
  const pathname = usePathname();

  const { setTheme } = useTheme()

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  const { push } = useRouter()

  const Logout = async (event: any) => {
    event.stopPropagation();
    try {
      const request = await axios.post('api/auth/logout')
      console.log("This is from the logout: ", request)
      if (request.status == 200) {
        console.log("You have been loggedout")
        push('/sign-in')
      }
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block ">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-6 ml-auto  items-center">
        {isTeacherPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher mode
            </Button>
          </Link>
        ) : null}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <LogOut className="cursor-pointer hover:text-red-400" onClick={Logout} />
      </div>
    </>
  )
}