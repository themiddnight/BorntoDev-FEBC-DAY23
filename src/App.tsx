import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from "@mui/material/colors"

import Routes from './routes'
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: blueGrey[400],
      main: blueGrey[600],
      dark: blueGrey[800],
      contrastText: '#fff',
    },
    secondary: {
      light: '#ddd',
      main: '#ccc',
      dark: '#aaa',
      contrastText: '#000',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}

export default App
