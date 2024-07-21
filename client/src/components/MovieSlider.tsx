import { Box, Heading, useBreakpointValue, Divider } from '@chakra-ui/react';
import Slider from 'react-slick';
import useMovies from '../hooks/useMovies';
import MovieCard from './MovieCard'; 
import { Movies } from '../hooks/useMovies'; 

const MovieSlider = () => {

    const { popularMovies, error } = useMovies();
    
    const slidesToShow = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4, xl: 5 });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow || 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    if (error) {
        return <Box>Error loading movies.</Box>;
    }

    return (

        <>
            {/* Movie Slider   */}
            <Heading size='md' mt={20}>POPULAR MOVIES</Heading>
            <Divider />
            <Box p="5" overflow="hidden">
                <Slider {...settings} >
                    {
                        popularMovies.map((movie: Movies) => (
                            <Box key={movie.id} p="0.5">
                                <MovieCard movie={movie} />
                            </Box>
                        ))
                    }
                </Slider>
            </Box>

        </>
    );
};

export default MovieSlider;
