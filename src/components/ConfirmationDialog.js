// src/components/ConfirmationDialog.js
import React from "react";
import { Dialog, DialogContent, DialogActions, Button, Typography } from "@mui/material";

const ConfirmationDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Typography variant="h6" color="primary">
          Producto agregado al carrito
        </Typography>
        <Typography variant="body2">
          ¡Tu producto ha sido agregado con éxito al carrito!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
