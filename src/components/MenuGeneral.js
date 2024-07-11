import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { onValue, ref, off } from 'firebase/database';
import { db } from '../firebase/firebase';

const MenuGeneral = ({ mostrarInformacionProducto }) => {
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const categoriasRef = ref(db, 'categorias');

    const handleData = (snapshot) => {
      const categoriasData = snapshot.val();
      console.log('Datos de categorías recuperados:', categoriasData);
      if (categoriasData) {
        setCategorias(categoriasData);
      }
    };

    onValue(categoriasRef, handleData, (error) => {
      console.error('Error al conectar con Firebase:', error);
    });

    return () => {
      off(categoriasRef, 'value', handleData);
    };
  }, []);

  const handleMostrarInformacionProducto = (item) => {
    mostrarInformacionProducto(item);
    // Navegar a la ruta base después de seleccionar un item del menú
    navigate('/');
  };

  const navigateToAdminPage = () => {
    navigate('/admin');
  };

  return (
    <div className="menubar-demo">
      <Menubar model={categorias.map(category => ({
        label: category.label,
        icon: category.icon,
        items: category.items.map(item => ({
          label: item.nombre,
          command: () => handleMostrarInformacionProducto(item)
        }))
      })).concat({
        label: 'Admin',
        icon: 'pi pi-cog',
        command: navigateToAdminPage
      })}>
        {categorias.map(category => (
          <React.Fragment key={category.label}>
            {category.items && category.items.map(item => (
              <Link key={item.id} to={`/item/${item.id}`} className="p-menuitem-link">
                {item.nombre}
              </Link>
            ))}
          </React.Fragment>
        ))}
      </Menubar>
      <Outlet /> {/* Renderiza el contenido de las rutas hijas */}
    </div>
  );
};

export default MenuGeneral;
