// src/App.js
import React, { useState } from "react";
import "./App.css";
import { ThemeProvider, CssBaseline, Grid } from "@mui/material";
import themes from "./themes";
import ProductCard from "./components/ProductCard";
import ThemeSelector from "./components/ThemeSelector";
import ConfirmationDialog from "./components/ConfirmationDialog";

function App() {
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("blue");

  const handleAddToCart = () => {
    setAdded(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const theme = themes[selectedTheme];

  const renderColorCircle = (color, themeName) => (
    <div
      key={themeName}
      onClick={() => handleThemeChange(themeName)}
      style={{
        backgroundColor: color,
        borderRadius: "50%",
        width: 40,
        height: 40,
        margin: "0 10px",
        cursor: "pointer",
        border: selectedTheme === themeName ? "3px solid black" : "none",
      }}
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <ThemeSelector renderColorCircle={renderColorCircle} />
        <Grid container spacing={4} justifyContent="center" sx={{ padding: theme.spacing(4) }}>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard handleAddToCart={handleAddToCart} added={added} />
          </Grid>
        </Grid>
        <ConfirmationDialog open={open} handleClose={handleClose} />
      </div>
    </ThemeProvider>
  );
}

export default App;
