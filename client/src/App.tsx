import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom'
import MovieByGenre from './pages/MovieByGenre';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/genre/:genreId" element={<MovieByGenre />} />
      </Routes>
    </>
  );
}

export default App;
