import './App.css';
import CarbonCalculator from './components/CarbonCalculator';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Typography, Box} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#629749',
      main: '#33691e',
      dark: '#003d00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#80d6ff',
      main: '#42a5f5',
      dark: '#0077c2',
      contrastText: '#000',
    },
    background: {
      light: '#f7fafc',
      dark: '#31373a'
    }
  },
  typography: {
    fontFamily: [
      'Josefin Sans',
      'latin',
      'latin-ext'
    ].join(',')
  }
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box height='100%' padding='15px' color='common.white' position='relative'>
          <Typography variant='h1' textAlign='center'>Calculate Your Carbon Footprint!</Typography>
          <CarbonCalculator />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
