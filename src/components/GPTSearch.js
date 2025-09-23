import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
return <div>
    <div className="fixed -z-10 inset-0 w-full h-full">
            <img 
              src="/bg.png" 
              alt="bg" 
              className="w-full h-full object-cover" 
            />
        </div>

    <GPTSearchBar />
    <GPTMovieSuggestions />

    {/**
     * GPT Search bar
     * GPT Movie Suggestions
     */}
</div>
};

export default GPTSearch;