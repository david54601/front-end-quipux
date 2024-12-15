import React from 'react';

const ListaDisplay = ({ listas }) => {
  return (
    <div>
      <h3>Listas Registradas</h3>
      {listas.map(lista => (
        <div key={lista.id}>
          <h4>{lista.nombre}</h4>
          <p>{lista.descripcion}</p>
          {lista.canciones && lista.canciones.length > 0 && (
            <ul>
              {lista.canciones.map((cancion) => (
                <li key={cancion.id}>{cancion.titulo} - {cancion.artista}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListaDisplay;
