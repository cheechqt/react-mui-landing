import { useEffect } from "react";
import { Container, Button, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import "./App.css";
import Appbar from "./components/appbar";

function App() {
  useEffect(() => {
    document.title = "React MUI - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Appbar />
        {/*
    Banner
    Promotions
    title
    products 
    footer
    searchbox
    appdrawer*/}

        <Button variant="contained">Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
