import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRomanceMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useRomanceMovies = () => {
//Fetch data from TMDB API and update the store with the results
    const dispatch = useDispatch();

    const getRomanceMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=10749', API_OPTIONS);

        const json = await data.json();
        
        dispatch(addRomanceMovies(json.results));
    };

    useEffect(()=>{
        getRomanceMovies();
    },[]); //empty brackets for one time render

};

export default useRomanceMovies;