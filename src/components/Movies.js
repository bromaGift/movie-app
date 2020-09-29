import React, {useState, useEffect} from 'react'
import yts from '../axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss'
import MovieList from './MovieList';
  
  const withData = (data) => {
    return {
        error: false,
        data,
    };
  };
  
const fetchMovieList = async (page, limit) => {
  try {
      let { data: res } = await yts.get(`https://yts.mx/api/v2/list_movies.json/?quality=3D`, {
          params: {
              page,
              limit,
          },
      });
      return withData(res.data.movies);
  } catch (err) {
      return ({
          message: 'Opps! Something went wrong while fetching the data',
      });
  }
};

const  Movies = () => {

    const limit = 12;
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        (async () => {
            const { data} = await fetchMovieList(currentPage, limit);

            setMovies((movies) => [...movies, ...data]);
        })();
    }, [currentPage]);

  return (
        <div className= "movies row pt-5">
        {movies.map((movie) => {
                        return <MovieList key={movie.id} movie={movie} />;
                    })}      
                    <button  onClick={() => setCurrentPage(currentPage + 1)}>
                         Show more movies...
                     </button>
        </div >
  );
}

export default Movies;
