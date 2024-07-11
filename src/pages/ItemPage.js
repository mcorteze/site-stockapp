import React from 'react';

const ItemPage = ({ producto }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{producto.nombre}</h2>
      <p>Precio: {producto.precio}</p>
      <p>Proveedor: {producto.proveedor}</p>
      <p>Stock: {producto.stock}</p>
      <p>Unidad: {producto.unidad}</p>
    </div>
  );
};

export default ItemPage;
