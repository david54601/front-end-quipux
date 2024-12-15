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
   <div class="container mt-4">

   <h3>Agregar Canción</h3>
   <form>
       <div class="form-row">
           <div class="col-md-3 mb-3">
               <input type="text" class="form-control" placeholder="Título" id="titulo"/>
           </div>
           <div class="col-md-3 mb-3">
               <input type="text" class="form-control" placeholder="Artista" id="artista"/>
           </div>
           <div class="col-md-3 mb-3">
               <input type="text" class="form-control" placeholder="Álbum" id="album"/>
            </div>
            <div class="col-md-2 mb-3">
                <input type="number" class="form-control" placeholder="Año" id="anio"/>
        </div>
        <div class="col-md-2 mb-3">
               <input type="text" class="form-control" placeholder="Género" id="genero"/>
         </div>
        </div>
        <button type="button" class="btn btn-primary" onclick="agregarCancion()">Agregar Canción</button>
    </form>
</div>
  );
};

export default CancionForm;
