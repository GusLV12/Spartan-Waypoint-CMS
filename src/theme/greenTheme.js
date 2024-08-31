import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const greenTheme = createTheme({

  palette: {
    primary: {
      main: 'rgba(255, 255, 255, 0.1)'
    },
    secondary: {
      main: '#72bf31'
    },
    error: {
      main: red.A400
    }
  }

});