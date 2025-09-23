import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () =>{

    const movies = useSelector((store) => store.movies);

    return <div className="bg-black">
        <div className="mt-0 md:-mt-36 pl-1 md:pl-12 relative z-20 ">
        <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies = {movies.popularMovies} />
        <MovieList title={"Trending"} movies = {movies.trendingMovies} />
        <MovieList title={"Comedy"} movies = {movies.comedyMovies} />
        <MovieList title={"Thriller"} movies = {movies.thrillerMovies} />
        <MovieList title={"Romance"} movies = {movies.romanceMovies} />

        </div>
    </div>;

};

export default SecondaryContainer;