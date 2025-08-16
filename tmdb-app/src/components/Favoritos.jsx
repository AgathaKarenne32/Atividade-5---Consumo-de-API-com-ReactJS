export default function Favoritos({ favoritos, onRemove }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Meus Filmes Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>Você ainda não adicionou filmes aos favoritos 🎬</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {favoritos.map((movie) => (
            <div key={movie.id} style={{ margin: "10px" }}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
              <button onClick={() => onRemove(movie)}>Remover</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
