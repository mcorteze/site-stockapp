import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Panel de Administración</h2>
      <div>
        <Link to="/admin/categorias" style={{ marginRight: '20px' }}>Administrar Categorías</Link>
        <Link to="/admin/items">Administrar Items</Link>
      </div>
    </div>
  );
};

export default AdminPage;
