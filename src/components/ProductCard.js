// src/components/ProductCard.js
import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

const ProductCard = ({ handleAddToCart, added }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        image="/computadora12.jpg"
        alt="Producto"
        sx={{
          height: "auto",
          width: "75%",
          objectFit: "cover",
          margin: "0 auto",
          display: "block",
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="primary"
        >
          Computadora HP
        </Typography>
        <Typography variant="body2">
          Computadora HP con procesador Intel Core i7 y RAM DDR4 de 16 GB. Dispone de una pantalla de 13.3 pulgadas con resolución de 1920 x 1080. Incluye un disco duro de 250 GB de almacenamiento y una tarjeta de red Intel® Ethernet Connection.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", paddingX: 2 }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          className={added ? "btn-animate" : ""}
        >
          Agregar al Carrito
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          Ver Más
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
