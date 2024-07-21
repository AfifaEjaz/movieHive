import { Box, Text, Link, VStack, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // If you're using React Router for navigation
import useMovies from '../hooks/useMovies';

const Sidebar = () => {

    const { genres,languages, error } = useMovies();
    const scrollbarColor = useColorModeValue('#888', '#444'); // Adjust for light/dark mode

    return (
        <Box
            position="fixed"
            left="0"
            top="20"
            w="200px"
            h="100vh"
            p="5"
            boxShadow="lg"
            overflowY="scroll"
            sx={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                    height: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    background: useColorModeValue('#f1f1f1', '#333'),
                    borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: scrollbarColor,
                    borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: useColorModeValue('#555', '#222'),
                },
            }}
        >
            <VStack spacing="1" align="stretch" >
                <Text fontSize="2lg" fontWeight="bold" mb="2">Generes</Text>

                {error && <Text>Some Error</Text>}

                {
                    genres.map((genre) => (
                        <Link key={genre.id} as={RouterLink} to={`/genre/${genre.id}`} _hover={{ textDecoration: 'none', bg: 'gray.700' }} p="1" borderRadius="md">{genre.name}</Link>
                    ))
                }

                <Text fontSize="2lg" fontWeight="bold" mb="2" mt="2">Languages</Text>
                {
                    languages.map((language) => (
                        <Link key={language.iso_639_1} as={RouterLink} to="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} p="1" borderRadius="md">{language.english_name}</Link>
                    ))
                }


            </VStack>
        </Box>
    );
};

export default Sidebar;
