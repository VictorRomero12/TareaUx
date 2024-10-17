// src/components/ThemeSelector.js
import React from "react";
import { Grid } from "@mui/material";

const ThemeSelector = ({ renderColorCircle }) => {
  return (
    <Grid container justifyContent="center" sx={{ marginBottom: 4 }}>
      {renderColorCircle("#0000FF", "blue")}
      {renderColorCircle("#DC143C", "red")}
      {renderColorCircle("#008000", "green")}
      {renderColorCircle("#FFD700", "yellow")}
      {renderColorCircle("#FF4500", "orange")}
    </Grid>
  );
};

export default ThemeSelector;
