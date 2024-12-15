import React, { useState } from 'react';

const CancionForm = ({ onAddCancion }) => {
  const [titulo, setTitulo] = useState('');
  const [artista, setArtista] = useState('');
  const [album, setAlbum] = useState('');
  const [anno, setAnno] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCancion({ titulo, artista, album, anno, genero });
    setTitulo(''); setArtista(''); setAlbum(''); setAnno(''); setGenero('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Canción</h3>
      <div>
        <label>Título:</label>
        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div>
        <label>Artista:</label>
        <input value={artista} onChange={(e) => setArtista(e.target.value)} />
      </div>
      <div>
        <label>Álbum:</label>
        <input value={album} onChange={(e) => setAlbum(e.target.value)} />
      </div>
      <div>
        <label>Año:</label>
        <input value={anno} onChange={(e) => setAnno(e.target.value)} />
      </div>
      <div>
        <label>Género:</label>
        <input value={genero} onChange={(e) => setGenero(e.target.value)} />
      </div>
      <button type="submit">Agregar Canción</button>
    </form>
  );
};

export default CancionForm;
