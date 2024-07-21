import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../components/NavBar.tsx';
import Sidebar from '../components/SideBar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Main from './Main.tsx';

const Homepage = () => {


    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '215px 1fr'
                }}
                width="100%"
                overflowX="hidden"
            >
                <GridItem area='nav'>
                    <NavBar />
                </GridItem>
                {/* <Show above="lg"> */}
                    <GridItem area='aside'>
                        <Sidebar />
                    </GridItem>
                {/* </Show> */}
                <GridItem area='main' p={1} overflowX="hidden">
                    <Main />
                </GridItem>
            </Grid>
        </>
    )
}

export default Homepage