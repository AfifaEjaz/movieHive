import { Box, HStack, Heading, Divider, SimpleGrid } from '@chakra-ui/react';
import CustomMovieCard from '../components/CustomMovieCard.tsx'
import MovieSlider from '../components/MovieSlider.tsx'
import useCustomMovies from '../hooks/useCustomMovies';
// import { CustomMovies } from '../hooks/useCustomMovies';
import AddModal from '../components/AddModal.tsx';
import { useState, useEffect } from 'react';

interface CustomMovies {
    _id: string,
    title: string,
    overview: string,
    genre: string,
    poster_path: string

}

const Main = () => {

    const { customMovies } = useCustomMovies()
    const [ addedMovies, setAddedMovies ] = useState<CustomMovies[]>([])
    
    useEffect(() => {
        setAddedMovies(customMovies);
    }, [customMovies]);

    console.log(addedMovies);
    return (
        <>
            <MovieSlider />

            <HStack justifyContent="space-between" padding='10px'>
                <Heading size='md' mt={1}>MOVIES ADDED BY YOU</Heading>
                <Box ><AddModal setAddedMovies={setAddedMovies} /></Box>
            </HStack>
            <Divider />
            <SimpleGrid mt={4} columns={{ sm: 2, md: 4, lg: 4, xl: 5 }} spacing={3} padding='10px'>
                {
                    addedMovies.map((movie: CustomMovies) => (

                        <CustomMovieCard key={movie._id} movie={movie} setAddedMovies={setAddedMovies} />

                    ))
                }
            </SimpleGrid>
        </>
    )
}

export default Main