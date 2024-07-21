import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../services/api-client';
import { Box, Heading, SimpleGrid, Text, Image, Spinner } from '@chakra-ui/react';

export interface Movie{
  id: number;
  title: string;
  poster_path: string;
  vote_average?: number;
  overview?: string;
}
const MainTwo = () => {

    const { genreId } = useParams<{ genreId: string }>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    apiClient.get("/discover/movie", {
      params: {
        api_key: "08ef3733950442a8d85c83329db0b73b",
        with_genres: genreId
      }
    }).then((res) => {
      setMovies(res.data.results);
      setLoading(false);
    }).catch((error) => {
      console.log(error.message);
      setLoading(false);
    })
  })

  if (loading) {
    return (
        <Box textAlign="center" justifyContent='center' py={10} px={6}>
            <Spinner size="xl" />
        </Box>
    );
}

  return (
    <>
    {/* <div>MovieByGenre - {genreId}</div> */}

    <Box py={10} px={6} mt={10}>
          <Heading as="h2" size="lg" mb={6}>
              Movies by Genre
          </Heading>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
              {movies.map(movie => (
                  <Box key={movie.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                      <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                      <Box p="6">
                          <Box alignItems="baseline">
                              <Text fontWeight="bold" fontSize="xl" mb="2">
                                  {movie.title}
                              </Text>
                          </Box>
                      </Box>
                  </Box>
              ))}
          </SimpleGrid>
      </Box>
  </>
  )
}

export default MainTwo