// src/themes.js
import { createTheme } from "@mui/material/styles";

const themes = {
  blue: createTheme({
    palette: {
      primary: { main: "#0000FF" }, // Azul fuerte
      secondary: { main: "#DC143C" }, // Rojo intenso
    },
    typography: {
      fontFamily: "Roboto, Arial",
      h5: { fontWeight: 700 },
      body2: { fontSize: "1rem", color: "#6b6b6b" },
    },
  }),
  red: createTheme({
    palette: {
      primary: { main: "#DC143C" }, // Rojo fuerte
      secondary: { main: "#0000FF" }, // Azul intenso
    },
  }),
  green: createTheme({
    palette: {
      primary: { main: "#008000" }, // Verde fuerte
      secondary: { main: "#FFD700" }, // Dorado
    },
  }),
  yellow: createTheme({
    palette: {
      primary: { main: "#FFD700" }, // Dorado
      secondary: { main: "#008000" }, // Verde
    },
  }),
  orange: createTheme({
    palette: {
      primary: { main: "#FF4500" }, // Naranja fuerte
      secondary: { main: "#8A2BE2" }, // Azul violeta
    },
  }),
};

export default themes;
