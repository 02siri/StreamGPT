import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
//Fetch data from TMDB API and update the store with the results
    const dispatch = useDispatch();

    const trendingMovies = useSelector((store)=> store.movies.trendingMovies);

    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS);

        const json = await data.json();
        
        dispatch(addTrendingMovies(json.results));
    };

    useEffect(()=>{
        !trendingMovies && getTrendingMovies();
    },[]); //empty brackets for one time render

};

export default useTrendingMovies;