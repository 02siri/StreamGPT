import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addThrillerMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useThrillerMovies = () =>{
    const dispatch = useDispatch();

    const thirllerMovies = useSelector((store)=> store.movies.thirllerMovies);

    const getThrillerMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=53', API_OPTIONS);

        const json = await data.json();

        dispatch(addThrillerMovies(json.results));
    };


    useEffect(() => {
        !thirllerMovies && getThrillerMovies();
    }, []);
};

export default useThrillerMovies; 