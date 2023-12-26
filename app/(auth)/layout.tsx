'use client'

import { ThemeProvider, createTheme } from '@mui/system'
import { customTheme } from '@/app/(dashboard)/_components/mui-styled/custom-themes/themes'


const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="h-full flex items-center justify-center">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default AuthLayout;