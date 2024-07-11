import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import './ModalEditarArticulo.css';

const ModalEditarArticulo = ({ articulo, actualizarArticulo, onHide }) => {
    const [nombre, setNombre] = useState(articulo.nombre);
    const [precio, setPrecio] = useState(articulo.precio);
    const [proveedor, setProveedor] = useState(articulo.proveedor);
    const [stock, setStock] = useState(articulo.stock);
    const [unidad, setUnidad] = useState(articulo.unidad);

    useEffect(() => {
        setNombre(articulo.nombre);
        setPrecio(articulo.precio);
        setProveedor(articulo.proveedor);
        setStock(articulo.stock);
        setUnidad(articulo.unidad);
    }, [articulo]);

    const handleSubmit = () => {
        const articuloActualizado = {
            ...articulo,
            nombre,
            precio,
            proveedor,
            stock,
            unidad
        };
        actualizarArticulo(articuloActualizado);
        onHide();
    };

    const unidades = [
        { label: 'Unidad', value: 'unidad' },
        { label: 'Kilo', value: 'kilo' },
        { label: 'Litro', value: 'litro' },
        { label: 'Paquete', value: 'paquete' },
        { label: 'Bolsa', value: 'bolsa' },
        { label: 'Docena', value: 'docena' },
        { label: 'pack-5', value: 'pack-5' },
        { label: 'pack-10', value: 'pack-10' },
        { label: 'Caja', value: 'caja' },
        { label: 'Par', value: 'par' },
        { label: 'Manojo', value: 'manojo' },
        { label: 'Botella', value: 'botella' },     
        { label: 'Gramo', value: 'gramo' },
        { label: 'Mililitro', value: 'mililitro' },
        { label: 'Metro', value: 'metro' },
        { label: 'Centímetro', value: 'centimetro' },
    ];

    return (
        <Dialog header={`Editar Artículo ${articulo.nombre}`} visible={true} style={{ width: '50vw' }} onHide={onHide}>
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="nombre">Nombre</label>
                    <InputText id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="p-field">
                    <label htmlFor="precio">Precio</label>
                    <InputNumber id="precio" value={precio} onValueChange={(e) => setPrecio(e.value)} mode="currency" currency="USD" />
                </div>
                <div className="p-field">
                    <label htmlFor="proveedor">Proveedor</label>
                    <InputText id="proveedor" value={proveedor} onChange={(e) => setProveedor(e.target.value)} />
                </div>
                <div className="p-field">
                    <label htmlFor="stock">Stock</label>
                    <InputNumber id="stock" value={stock} onValueChange={(e) => setStock(e.value)} />
                </div>
                <div className="p-field">
                    <label htmlFor="unidad">Unidad</label>
                    <Dropdown id="unidad" value={unidad} options={unidades} onChange={(e) => setUnidad(e.value)} />
                </div>
                <Button label="Actualizar" icon="pi pi-check" onClick={handleSubmit} />
            </div>
        </Dialog>
    );
};

export default ModalEditarArticulo;
