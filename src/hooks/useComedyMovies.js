import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addComedyMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useComedyMovies = () => {
//Fetch data from TMDB API and update the store with the results
    const dispatch = useDispatch();

    const getComedyMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=35', API_OPTIONS);

        const json = await data.json();
        
        dispatch(addComedyMovies(json.results));
    };

    useEffect(()=>{
        getComedyMovies();
    },[]); //empty brackets for one time render

};

export default useComedyMovies;