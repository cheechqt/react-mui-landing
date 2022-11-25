import { useEffect } from "react";
import {
  Container,
  Button,
  ThemeProvider,
  Box,
  Typography,
} from "@mui/material";
import theme from "./styles/theme";
import "./App.css";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer"

function App() {
  useEffect(() => {
    document.title = "React MUI - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Appbar />
        <Banner />
        <Promotions />
        <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
          <Typography variant="h4">Our Products</Typography>
        </Box>
        <Products />
        <Footer />
        {/*
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
