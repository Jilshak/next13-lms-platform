import { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios'
import { useRouter } from "next/navigation";

interface UserResponse {
  user: string | null
  error: AxiosError | null
}

export const AuthProvider = ({ children }: { children: React.ReactNode; }) => {
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState<Boolean>(false)

  useEffect(() => {
    const test = async () => {
      const { user, error } = await getUser()
      console.log(user, error, 'from the layout page')
      if (error) {
        router.push('/sign-in')
        return
      }
      setIsSuccess(true)
    }
    test()
  }, [router])

  if (!isSuccess) {
    return (
      <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
        <div className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white" role="status" aria-label="loading">
          <span className="sr-only">Loading...</span>
        </div>
        <h1 className="my-3">Loading Please wait...</h1>
      </div>
    )
  } else {
    return <>{children}</>;
  }
}

async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get('/api/auth/authcheck')
    console.log("This is the data coming from here cookie: -->", data)
    return {
      user: data,
      error: null
    }
  } catch (e) {
    const error = e as AxiosError
    return {
      user: null,
      error,
    }
  }
}
