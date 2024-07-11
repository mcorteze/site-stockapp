import React, { useState } from 'react';
import { ref, set, push } from 'firebase/database';
import { db } from '../firebase/firebase';

const AdminCategoriaPage = () => {
  const [categoria, setCategoria] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleCrearCategoria = () => {
    if (categoria.trim() === '') {
      setMensaje('El nombre de la categoría no puede estar vacío.');
      return;
    }

    const newCategoriaRef = push(ref(db, 'categorias'));
    set(newCategoriaRef, {
      label: categoria,
      icon: 'pi pi-fw pi-tag', // Puedes ajustar el icono según tu necesidad
      items: []
    })
      .then(() => {
        setMensaje('Categoría creada exitosamente.');
        setCategoria('');
      })
      .catch((error) => {
        setMensaje(`Error al crear la categoría: ${error.message}`);
      });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Administrar Categorías</h2>
      <div>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Nombre de la categoría"
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button onClick={handleCrearCategoria} style={{ padding: '10px' }}>Crear Categoría</button>
      </div>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default AdminCategoriaPage;
