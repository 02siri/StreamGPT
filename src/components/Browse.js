import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();

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