import createTheme from "@mui/system/createTheme";


export const customTheme = createTheme({
  palette: {
    mode: 'light', // Set initial mode to 'light'
    light: {
      background: '#fff', // Background color for light mode
    },
    dark: {
      background: '#000000', // Background color for dark mode
    },
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.05)', // sm
    '0px 4px 6px rgba(0, 0, 0, 0.1)', // md
    '0px 10px 15px rgba(0, 0, 0, 0.15)', // lg
    '0px 20px 25px rgba(0, 0, 0, 0.2)', // xl
  ],
});



  
  