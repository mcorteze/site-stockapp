import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

import './ModalAgregar.css';

const ModalAgregar = ({ agregarArticulo }) => {
    const [visible, setVisible] = useState(false);
    const [nuevoArticulo, setNuevoArticulo] = useState({
        id: null,
        nombre: '',
        precio: 0,
        proveedor: '',
        stock: 0,
        unidad: ''
    });

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
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoArticulo({ ...nuevoArticulo, [name]: value });
    };

    const handleSubmit = () => {
        agregarArticulo(nuevoArticulo);
        setVisible(false);
        setNuevoArticulo({
            id: null,
            nombre: '',
            precio: 0,
            proveedor: '',
            stock: 0,
            unidad: ''
        });
    };

    return (
        <>
            <Button label="+" icon="pi pi-plus" onClick={() => setVisible(true)} />
            <Dialog header="Agregar Artículo" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="nombre">Nombre</label>
                        <InputText id="nombre" name="nombre" value={nuevoArticulo.nombre} onChange={handleChange} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="precio">Precio</label>
                        <InputNumber id="precio" name="precio" value={nuevoArticulo.precio} onValueChange={(e) => setNuevoArticulo({ ...nuevoArticulo, precio: e.value })} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="p-field">
                        <label htmlFor="proveedor">Proveedor</label>
                        <InputText id="proveedor" name="proveedor" value={nuevoArticulo.proveedor} onChange={handleChange} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="stock">Stock</label>
                        <InputNumber id="stock" name="stock" value={nuevoArticulo.stock} onValueChange={(e) => setNuevoArticulo({ ...nuevoArticulo, stock: e.value })} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="unidad">Unidad</label>
                        <Dropdown id="unidad" name="unidad" value={nuevoArticulo.unidad} options={unidades} onChange={handleChange} placeholder="Seleccione una unidad" />
                    </div>
                </div>
                <Button label="Agregar" icon="pi pi-check" onClick={handleSubmit} />
            </Dialog>
        </>
    );
};

export default ModalAgregar;
