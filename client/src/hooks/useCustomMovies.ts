import { useEffect, useState } from "react";
import secondApiClient from "../services/second-api-client";

export interface CustomMovies {
    _id: string,
    title: string,
    overview: string,
    genre: string,
    poster_path: string

}

const useCustomMovies = () => {

    const [customMovies, setCustomMovies] = useState<CustomMovies[]>([])
    const [error, setError] = useState<string>("");

    useEffect(() => {

        const fetchedCustomMovies = async () => {
            try {
                const res = await secondApiClient.get("/allmovies");
                setCustomMovies(res.data.result)
                console.log(res.data.result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred.");
                }
            }
        }

        fetchedCustomMovies()
    }, [])

    return { customMovies, setCustomMovies, error }

}

export default useCustomMovies