import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './TablaArticulo.css';

const TablaArticulo = ({ articulos, setSelectedArticulo, setEditingArticulo }) => {
    const [globalFilter, setGlobalFilter] = useState(null);

    const onRowSelect = (event) => {
        setSelectedArticulo(event.data);
    };

    const onEditButtonClick = (articulo) => {
        setEditingArticulo(articulo);
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => onEditButtonClick(rowData)} />
            </React.Fragment>
        );
    };

    return (
        <div>
            <div className="p-inputgroup">
                <InputText type="search" placeholder="Buscar..." onInput={(e) => setGlobalFilter(e.target.value)} />
            </div>
            <DataTable
                value={articulos}
                globalFilter={globalFilter}
                emptyMessage="No se encontraron artículos."
                selectionMode="single"
                onRowSelect={onRowSelect}
            >
                <Column field="nombre" header="Nombre" sortable></Column>
                <Column field="precio" header="Precio" sortable></Column>
                <Column field="proveedor" header="Proveedor" sortable></Column>
                <Column field="stock" header="Stock" sortable></Column>
                <Column field="unidad" header="Unidad" sortable></Column>
                <Column body={actionBodyTemplate}></Column>
            </DataTable>
        </div>
    );
};

export default TablaArticulo;
