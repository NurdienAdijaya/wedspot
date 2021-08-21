import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
=======
import QuotationNew from "./components/buttons/QuotationNew";
import QuotationSent from "./components/buttons/QuotationSent";
>>>>>>> 29c3acdacb1c788ad391a92c8e422e93724bc415
import LoginPage from "./pages/Login";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#455437",
    },
    secondary: {
      main: "#C97C68",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
