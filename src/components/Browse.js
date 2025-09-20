import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useComedyMovies from "../hooks/useComedyMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useRomanceMovies from "../hooks/useRomanceMovies";
import useThrillerMovies from "../hooks/useThrillerMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {

    const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useComedyMovies();
    useRomanceMovies();
    useThrillerMovies();

    return <div>
        <Header />
        {showGPTSearch ? (
            <GPTSearch /> ):(
            <>
        <MainContainer />
        <SecondaryContainer />
            </>)}
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