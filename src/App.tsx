import { BrowserRouter, Routes, Route } from "react-router-dom"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from "@mui/material/colors"

import Products from "./pages/Products"
import Product from "./pages/Product"
import Checkout from "./pages/Checkout"
import NotFound from "./pages/NotFound"

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
