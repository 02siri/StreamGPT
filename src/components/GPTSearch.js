import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
return <> 
    <div className="fixed -z-10 inset-0 w-full h-full">
            <img 
              src="/bg.png" 
              alt="bg" 
              className="w-full h-full object-cover" 
            />
        </div>
  <div className="pt-[55%] md:p-0">
      <GPTSearchBar />
      <GPTMovieSuggestions />
  </div>
</>
};

export default GPTSearch;