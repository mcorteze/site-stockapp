import React, { useState, useEffect } from 'react';
import MenuGeneral from './components/MenuGeneral';
import InicioPage from './pages/InicioPage';
import ItemPage from './pages/ItemPage';
import AdminPage from './pages/AdminPage'; // Importa la página de administración
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes en lugar de Switch
import { onValue, ref, off } from 'firebase/database';
import { db } from './firebase/firebase';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';

const App = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [conexionFirebase, setConexionFirebase] = useState(false);
  const [mensajeConexion, setMensajeConexion] = useState('Conectando con Firebase...');

  const mostrarInformacionProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  useEffect(() => {
    const categoriasRef = ref(db, 'categorias');

    const handleData = (snapshot) => {
      const categoriasData = snapshot.val();
      console.log('Datos recuperados de Firebase:', categoriasData); // Verificar los datos recuperados
      if (categoriasData) {
        setConexionFirebase(true);
        setMensajeConexion('Conexión a Firebase establecida correctamente.');
      } else {
        setMensajeConexion('No se encontraron datos en Firebase.');
      }
    };

    onValue(categoriasRef, handleData, (error) => {
      console.error('Error al conectar con Firebase:', error);
      setMensajeConexion('Error al conectar con Firebase.');
    });

    return () => {
      off(categoriasRef, 'value', handleData);
    };
  }, []);

  return (
    <Router>
      <div id="canvas">
        <header id="header">
          <MenuGeneral mostrarInformacionProducto={mostrarInformacionProducto} />
        </header>
        <section id="contenido">
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={
              conexionFirebase ? (
                productoSeleccionado ? (
                  <ItemPage producto={productoSeleccionado} />
                ) : (
                  <InicioPage />
                )
              ) : (
                <p style={{ padding: '20px', textAlign: 'center' }}>{mensajeConexion}</p>
              )
            } />
          </Routes>
        </section>
        <footer id="footer">
          <div style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            <p>Pie de página - Derechos reservados © 2024</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
