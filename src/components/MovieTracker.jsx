import { useState } from "react";
import "./MovieTracker.css";

function MovieTracker() {
  const [movies, setMovies] = useState([]); // Список фильмов
  const [movieName, setMovieName] = useState(""); // Текущий ввод в инпуте
  const [editIndex, setEditIndex] = useState(null); // Индекс редактируемого фильма

  // Добавление или редактирование фильма
  const handleAddOrEditMovie = () => {
    if (movieName.trim() === "") return; // Не добавлять пустую строку

    if (editIndex !== null) {
      // Редактирование существующего фильма
      const updatedMovies = [...movies];
      updatedMovies[editIndex] = movieName;
      setMovies(updatedMovies);
      setEditIndex(null);
    } else {
      // Добавление нового фильма
      setMovies([...movies, movieName]);
    }

    setMovieName(""); // Очистка инпута
  };

  // Удаление фильма
  const handleDeleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  // Редактирование фильма
  const handleEditMovie = (index) => {
    setMovieName(movies[index]);
    setEditIndex(index);
  };

  return (
    <div className="movie-tracker">
      <h2>Movie Tracker</h2>
      <div className="input-container">
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="Enter movie name..."
        />
        <button onClick={handleAddOrEditMovie}>
          {editIndex !== null ? "Edit" : "Add"}
        </button>
      </div>
      <div className="movie-block">
        <p>to watch list</p>
      </div>

      <ul>
        {movies.map((movie, index) => (
          <li key={index} className="movie-item">
            {movie}
            <div>
              <button onClick={() => handleEditMovie(index)}>Edit</button>
              <button onClick={() => handleDeleteMovie(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieTracker;