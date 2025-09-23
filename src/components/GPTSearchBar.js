import { useSelector, useDispatch} from "react-redux";
import lang from "../utils/languageConstants";
import { useRef} from "react";
import genAI from "../utils/gemini";
import {API_OPTIONS} from "../utils/constants";
import {addGPTMovieResult} from "../utils/gptSlice";

const GPTSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    //search movie in TMDB Database
    const searchMoviesTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "%21&include_adult=false&language=en-US&page=1", API_OPTIONS);
        
        const json = await data.json();
        return json.results;
    };
    
   const handleGPTSearchClick = async () => {
        const searchTextValue = searchText.current.value;
        console.log(searchTextValue);

        if (!searchTextValue) {
            console.error("Please enter a movie search query.");
            return;
        }

        try {
            // For text-only input, use the gemini-2.5-flash model
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            // The prompt that asks the Gemini model to act as a movie search engine
            const prompt = `Act as a movie recommendation system and suggest some movies for the query 
             "${searchTextValue}" . Only give me names of 7 movies`;

            // Make the API call to generate content
            const result = await model.generateContent({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: 'application/json',
            },
        });

            const response = await result.response;
            const text = response.text();

        // Parse the JSON string into a JavaScript object
        const movieData = JSON.parse(text);

        console.log("Gemini API JSON Response:", movieData);

        //For each movie, search the TMDB API
        const promiseArray = movieData.map((movie) => searchMoviesTMDB(movie));
        //this will return list of promises: [Promise, Promise...]

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);

        dispatch(
            addGPTMovieResult({movieNames: movieData, movieResults: tmdbResults})
        );

        } catch (error) {
            console.error("Error calling the Gemini API:", error);
        }

        };

    return (<div className="-mt-7 md:pt-[10%] flex justify-center">
    <form className="w-full md:w-1/2 bg-transparent grid grid-cols-12 rounded-xl" 
    //precentDefault -> not refreshing the page but giving error
    onSubmit={(e) => e.preventDefault()}>
        <input 
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9" 
            placeholder={lang[langKey].searchPlaceholder}/>

        <button 
        className="col-span-3 m-5 md:m-4 py-1 md:py-4 px-1 md:px-4 bg-red-700 text-sm md:text-lg text-white rounded-md md:rounded-xl"
        onClick={handleGPTSearchClick}>
            {lang[langKey].search}
            </button>
    </form>
</div>
);
};

export default GPTSearchBar;