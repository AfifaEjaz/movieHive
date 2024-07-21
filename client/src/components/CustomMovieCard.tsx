import { Box, Image, Text, Flex, Badge, useColorModeValue, IconButton } from '@chakra-ui/react';
import { CustomMovies } from '../hooks/useCustomMovies';
import { MdDelete } from "react-icons/md";
import secondApiClient from '../services/second-api-client';

interface MovieCardProps {
    movie: CustomMovies,
    setAddedMovies: React.Dispatch<React.SetStateAction<CustomMovies[]>>;
}

const CustomMovieCard = ({ movie, setAddedMovies }: MovieCardProps) => {
    const badgeColorScheme = useColorModeValue('teal', 'orange');

    const deleteMovie = (_id: string) => {
        console.log("its working", _id);
        secondApiClient.post("/deletemovie", { _id })
            .then((res) => {
                setAddedMovies(res.data.result);
                console.log(res.data.result);
                console.log("movie deleted");
            }).catch((error) => {
                console.error("Error deleting movie:", error.message);
            });
    }

    return (
        <Box
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            _hover={{ shadow: 'md', transform: 'scale(1.05)' }}
            transition="transform 0.3s ease"
            cursor="pointer"
            m="1"
            maxW="190px"
        >
            <Image
                src={movie.poster_path}
                alt={movie.title}
                objectFit="cover"
                boxSize="300px"
            />
            <Box p="2">
                <Flex justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold" fontSize="sm" pb="1">{movie.title}</Text>
                    <IconButton
                        icon={<MdDelete />}
                        aria-label="Delete movie"
                        size="sm"
                        onClick={() => deleteMovie(movie._id)}
                        variant="ghost"
                        _hover={{ bg: 'transparent', color: 'red.500' }}
                        _focus={{ boxShadow: 'none' }}
                        cursor="pointer"
                    />
                </Flex>
                <Flex mt="2" alignItems="center">
                    <Badge colorScheme={badgeColorScheme} fontSize="sm">Overview: {movie.overview}</Badge>
                </Flex>
            </Box>
        </Box>
    );
};

export default CustomMovieCard;
