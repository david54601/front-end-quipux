import React, { useState, useEffect } from 'react';
import ListaForm from '../components/Lista/ListaForm';
import CancionForm from '../components/Lista/CancionForm';
import ListaDisplay from '../components/Lista/ListaDisplay';
import { crearListaConCanciones, obtenerListas } from '../api/listaService';

const ListaPage = () => {
  const [listaInfo, setListaInfo] = useState({ nombreLista: '', descripcion: '', canciones: [] });
  const [listas, setListas] = useState([]);

  useEffect(() => {
    cargarListas();
  }, []);

  const cargarListas = async () => {
    const data = await obtenerListas();
    setListas(data);
  };
  const handleListaSubmit = async (data) => {
   setListaInfo(prev => ({ ...prev, nombreLista: data.nombreLista, descripcion: data.descripcion }));
  };
  const handleAddCancion = (cancion) => {
    setListaInfo(prev => ({ ...prev, canciones: [...prev.canciones, cancion] }));
  };
  const handleGuardar = async () => {
    await crearListaConCanciones(listaInfo);
    setListaInfo({ nombreLista: '', descripcion: '', canciones: [] });
    await cargarListas();
  };
  return (
    <div>
      <h2>Gestión de Listas</h2>
      <ListaForm onSubmit={handleListaSubmit} />
      <CancionForm onAddCancion={handleAddCancion} />
      <button onClick={handleGuardar}>Guardar Lista con Canciones</button>
      <ListaDisplay listas={listas} />
    </div>
  );
};

export default ListaPage;
