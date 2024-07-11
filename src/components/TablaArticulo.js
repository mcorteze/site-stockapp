import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import './TablaArticulo.css';

const TablaArticulo = ({ articulos, setSelectedArticulo }) => {
    const [globalFilter, setGlobalFilter] = useState(null);

    const onRowSelect = (event) => {
        setSelectedArticulo(event.data);
    };

    return (
        <div>
            <div className="p-inputgroup">
                <InputText type="search" placeholder="Buscar..." onInput={(e) => setGlobalFilter(e.target.value)} />
            </div>
            <DataTable
                value={articulos}
                paginator
                rows={10}
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
            </DataTable>
        </div>
    );
};

export default TablaArticulo;
