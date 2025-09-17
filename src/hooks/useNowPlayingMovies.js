import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
//Fetch data from TMDB API and update the store with the results
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

        const json = await data.json();
        
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(()=>{
        getNowPlayingMovies();
    },[]); //empty brackets for one time render

};

export default useNowPlayingMovies;