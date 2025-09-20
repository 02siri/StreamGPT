import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useComedyMovies from "../hooks/useComedyMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useRomanceMovies from "../hooks/useRomanceMovies";
import useThrillerMovies from "../hooks/useThrillerMovies";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useComedyMovies();
    useRomanceMovies();
    useThrillerMovies();

    return <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
        {/**
         * Main Container
            - Video Background 
            - Video Title 

         * Secondary Container
            - Movie List * n (Different Types)
                - cards * n 
         */}
    </div>;
};

export default Browse;