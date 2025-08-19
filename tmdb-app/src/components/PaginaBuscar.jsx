// src/components/PaginaBuscar.jsx
//1. Página de Busca função obrigatoria 
import { useState } from 'react';

function PaginaBuscar({ onSearch }) {
  const [textoBusca, setTextoBusca] = useState('')

  // atualiza o estado interno
  const handleInputChange = (e) => {
    setTextoBusca(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Usa o estado interno (textoBusca) para avisar o pai app.jsx
    if (textoBusca.trim() !== '') {
      onSearch(textoBusca); // Chama a função que veio do pai
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Este div vai agrupar o input e o botão */}
      <div className="search-bar-container">
        <input
        type="text"
        className='search-input'
        placeholder="Buscar por um Filme ou Série..."
        value={textoBusca}
        onChange={handleInputChange}
      />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </div>
    </form>
  )
}

export default PaginaBuscar;
