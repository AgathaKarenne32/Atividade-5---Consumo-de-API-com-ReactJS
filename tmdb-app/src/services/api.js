//1. Página de Busca
//Um campo de texto para o usuário digitar o termo.
//Exibir lista de resultados com pôster, título, ano e botão para ver detalhes.
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5510c352e7a9308a9be56eb2f2b0600a';

// 1. Página de Busca
export const searchMovies = async (query, pageNumber = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}&page=${pageNumber}`
    );
    const data = await response.json();
    return {
      results: data.results,
      page: data.page,
      totalPages: data.total_pages
    };
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    return { results: [], page: 1, totalPages: 1 };
  }
};

// 3. Página de Detalhes
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=pt-BR&append_to_response=credits`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do filme:', error);
    return null;
  }
};

// Função para buscar filmes por categoria
export const getMoviesCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=pt-BR&page=1`);
  if (!response.ok) {
    throw new Error('Erro ao buscar filmes da categoria.');
  }
  const data = await response.json();
  
  // ADICIONE ESTA LINHA PARA VERIFICAR A RESPOSTA
  console.log(`Dados recebidos para a categoria '${category}':`, data.results);
  
  return data.results;
};
