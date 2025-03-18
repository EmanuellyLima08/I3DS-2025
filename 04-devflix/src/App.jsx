import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import MovieCard from "./components/movieCard/movieCard";
import logo  from "./assets/devflix.png";
import lupa from "./assets/search.svg";
// import logo from 'https://placehold.co/200x200'

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  //Utilizando chave de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Alimentando com dados para não ficar nulo
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  //Criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //Alimentando o movies
    setMovies(data.Search);
  };

  //e = evento | ao clicar ou digitar acontece algo
  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(search);
  };

  return (
    <div id="app">
      <img className="logo" src={logo} alt="" />

      <div className="search">
        <input
        onKeyDown={handleKeyPress}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Pesquise por filmes" 
        />
        <img onClick={() => searchMovies(search)} src={lupa} alt="" />
      </div>

    {movies?.length > 0 ? (
      <div className="container">
        {movies.map((movie, index) => (
        <MovieCard key={index} apiUrl={apiUrl} {...movie} />
      ))}
      </div>
    ) : (
      <h2 className="empty">Filme não encontrado 😢</h2>
    )}

      {/* <MovieCard
        Year={2024}
        Type={"Movie"}
        Title={"Batman"}
        Poster={"https://placehold.co/300x444"}
      />

      <MovieCard
        Year={2023}
        Type={"Serie"}
        Title={"Outer Banks"}
        Poster={"https://placehold.co/300x444"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut odio vehicula ultricies"
        }
        foto
      /> */}

      <Footer
        devName={"ManúLima"}
        devLink={"https://github.com/emanuellylima08"}
      />
    </div>
  );
}

export default App;
