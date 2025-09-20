import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);

return <div className="pt-[10%] flex justify-center">
    <form className="w-1/2 bg-transparent grid grid-cols-12 rounded-xl">
        <input 
            type="text"
            className="p-4 m-4 col-span-9" 
            placeholder={lang[langKey].searchPlaceholder}/>

        <button className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-xl">
            {lang[langKey].search}
            </button>
    </form>
</div>
};

export default GPTSearchBar;