import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Movies {
  id: number;
  title: string;
  poster_path: string;
  vote_average?: number;
  overview?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Language {
  iso_639_1: string;
  english_name: string;
}

const useMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Movies[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movies[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await apiClient.get('/movie/popular');
        setPopularMovies(res.data.results);
        console.log(res.data.results);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      }
    };

    const fetchTopRatedMovies = async () => {
      try {
        const res = await apiClient.get('/movie/top_rated');
        setTopRatedMovies(res.data.results);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      }
    };

    const fetchGenres = async () => {
      try {
        const res = await apiClient.get('/genre/movie/list');
        setGenres(res.data.genres);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      }
    };

    const fetchLanguages = async () => {
      try {
        const res = await apiClient.get('/configuration/languages');
        setLanguages(res.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      }
    };

  

    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchGenres();
    fetchLanguages();
  }, []);

  return { popularMovies, topRatedMovies, genres, languages, error };
};

export default useMovies;
