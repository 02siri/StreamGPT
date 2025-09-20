import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addThrillerMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useThrillerMovies = () =>{
    const dispatch = useDispatch();

    const getThrillerMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=53', API_OPTIONS);

        const json = await data.json();

        dispatch(addThrillerMovies(json.results));
    };


    useEffect(() => {
        getThrillerMovies();
    }, []);
};

export default useThrillerMovies; 