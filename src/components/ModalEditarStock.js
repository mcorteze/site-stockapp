import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import './ModalEditarStock.css';

const ModalEditarStock = ({ articulo, actualizarStock, onHide }) => {
    const [nuevoStock, setNuevoStock] = useState(articulo.stock);

    useEffect(() => {
        setNuevoStock(articulo.stock);
    }, [articulo]);

    const handleSubmit = () => {
        actualizarStock(articulo.id, nuevoStock);
        onHide();
    };

    return (
        <Dialog header={`Editar Stock de ${articulo.nombre}`} visible={true} style={{ width: '50vw' }} onHide={onHide}>
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="stock">Stock</label>
                    <InputNumber id="stock" value={nuevoStock} onValueChange={(e) => setNuevoStock(e.value)} />
                </div>
                <Button label="Actualizar" icon="pi pi-check" onClick={handleSubmit} />
            </div>
        </Dialog>
    );
};

export default ModalEditarStock;
