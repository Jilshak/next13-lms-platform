import { styled, Theme } from '@mui/system';


export const MyThemeComponent = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
}));


// for course list
export const GridComponent = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: theme.spacing(1),

  '@media (min-width: 640px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media (min-width: 1024px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  '@media (min-width: 1280px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },

  '@media (min-width: 1536px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));


// for course cards:
export const CourseStyleCard = styled('div')(({ theme }: { theme: Theme }) => ({
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  height: '100%',
  boxShadow: theme.palette.mode === 'light' ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : '0px 4px 8px rgba(255, 255, 255, 0.15)', // Conditionally set boxShadow
  transition: 'all 0.7s',
  
  '&:hover': {
    transform: 'scale(1.10)',
    boxShadow: theme.palette.mode === 'light' ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : '0px 4px 8px rgba(255, 255, 255, 0.15)', // Conditionally set hover boxShadow
  },
  
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000000', // Conditionally set background color
}));







