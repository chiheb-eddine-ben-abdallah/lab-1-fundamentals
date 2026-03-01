// src/components/MovieList.jsx
import Movie from './Movie';

export default function MovieList({ movies }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
    }}>
      {movies.map(movie => (
        <Movie
          key={movie.id}
          title={movie.title}
          director={movie.director}
          year={movie.year}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}
