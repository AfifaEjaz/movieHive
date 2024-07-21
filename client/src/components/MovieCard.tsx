import { Box, Image, Text, Flex, Badge, useColorModeValue } from '@chakra-ui/react';
import { Movies } from '../hooks/useMovies'; 

interface MovieCardProps {
    movie: Movies;
}

const MovieCard = ({ movie }: MovieCardProps) => {
 
    const badgeColorScheme = useColorModeValue('teal', 'orange');

    return (
        <Box
            borderRadius="lg" 
            overflow="hidden"
            boxShadow="lg" 
            _hover={{ shadow: 'md', transform: 'scale(1.05)' }} 
            transition="transform 0.3s ease"
            cursor="pointer"
            m="1" 
            maxW="300px" // Optional: adjust width if needed
        >
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                objectFit="cover"
                boxSize="300px" // Decrease height of the image
            />
            <Box p="2"> 
                <Text fontWeight="bold" fontSize="sm" mb="1" >{movie.title}</Text> 
                <Flex mt="2" alignItems="center">
                    <Badge colorScheme={badgeColorScheme} fontSize="sm">Rating: {movie.vote_average}</Badge> {/* Updated to vote_average */}
                </Flex>
            </Box>
        </Box>
    );
};

export default MovieCard;
