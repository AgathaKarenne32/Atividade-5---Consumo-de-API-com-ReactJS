//3. Página de Detalhes
//Exibir informações completas (diretor, elenco, sinopse, avaliação) ao clicar em um filme.

import React from 'react';

function MovieDetails({ movie, onClose }) {
  if (!movie) return null;

  const director = movie.credits?.crew?.find((c) => c.job === 'Director');
  const cast = movie.credits?.cast?.slice(0, 5) || [];

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=Sem+Imagem';

  return (
    <div style={{
      position: 'fixed', top:0, left:0, width:'100%', height:'100%',
      backgroundColor:'rgba(0,0,0,0.8)', color:'#fff',
      display:'flex', justifyContent:'center', alignItems:'center', padding:'20px', overflowY:'auto', zIndex:1000
    }}>
      <div style={{backgroundColor:'#222', padding:'20px', borderRadius:'8px', maxWidth:'800px', width:'100%'}}>
        <button onClick={onClose} style={{marginBottom:'20px'}}>Fechar</button>
        <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
          <img src={posterUrl} alt={movie.title} style={{width:'300px', borderRadius:'8px'}}/>
          <div style={{flex:1, minWidth:'250px'}}>
            <h2>{movie.title} ({movie.release_date?.split('-')[0]})</h2>
            <p><strong>Diretor:</strong> {director?.name || 'N/A'}</p>
            <p><strong>Elenco:</strong> {cast.map(a => a.name).join(', ') || 'N/A'}</p>
            <p><strong>Avaliação:</strong> {movie.vote_average}</p>
            <p><strong>Sinopse:</strong> {movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
