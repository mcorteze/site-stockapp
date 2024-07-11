import React, { useState, useEffect } from 'react';
import ModalAgregar from './components/ModalAgregar';
import TablaArticulo from './components/TablaArticulo';
import ModalEditarStock from './components/ModalEditarStock';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import articulosData from './data/articulos';

const App = () => {
    const [articulos, setArticulos] = useState(() => {
        const savedArticulos = localStorage.getItem('articulos');
        return savedArticulos ? JSON.parse(savedArticulos) : articulosData;
    });

    const [selectedArticulo, setSelectedArticulo] = useState(null);

    useEffect(() => {
        localStorage.setItem('articulos', JSON.stringify(articulos));
    }, [articulos]);

    const agregarArticulo = (nuevoArticulo) => {
        nuevoArticulo.id = articulos.length + 1;
        const nuevosArticulos = [...articulos, nuevoArticulo];
        setArticulos(nuevosArticulos);
    };

    const actualizarStock = (id, nuevoStock) => {
        const nuevosArticulos = articulos.map((articulo) =>
            articulo.id === id ? { ...articulo, stock: nuevoStock } : articulo
        );
        setArticulos(nuevosArticulos);
    };

    return (
        <div id="canvas">
            <header id="header">
                Titulo de la aplicacion
            </header>
            <section id="contenido">
                <ModalAgregar agregarArticulo={agregarArticulo} />
                <TablaArticulo articulos={articulos} setSelectedArticulo={setSelectedArticulo} />
                {selectedArticulo && (
                    <ModalEditarStock
                        articulo={selectedArticulo}
                        actualizarStock={actualizarStock}
                        onHide={() => setSelectedArticulo(null)}
                    />
                )}
            </section>
            <footer id="footer">
                <div style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
                    <p>Pie de página - Derechos reservados © 2024</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
