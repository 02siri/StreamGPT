import {auth} from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGS, USER_ICON } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {

const user = useSelector(store=>store.user);
const navigate = useNavigate();
const dispatch = useDispatch();
const showGPTSearch = useSelector((store)=> store.gpt.showGPTSearch);

const handleSignOut = () => {
  //Sign out successful
    signOut(auth).then(() => {}).catch((error) => {
  // An error happened.
  navigate("/error");
});
};

//want to set up this event listener just once when the auth state changes 
    useEffect(()=>{
    //whenever authentication state changes [user signs in/signs up]
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
           dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL}));
           navigate("/browse");
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
        }
        });

      //Unsubscribe when component unmounts
      return () => unsubscribe();
    },[]);

    const handleGPTSearchClick = () => {
      //Toggle GPT Search
      dispatch(toggleGPTSearchView());
    }

    const handleLangChange = (e) =>{
     dispatch(changeLang(e.target.value));
    };

return (
<div className="absolute w-screen h-20 px-5 bg-gradient-to-b from-black z-10 flex justify-between items-center">

    <img
    className="w-44"
    src = {LOGO}
    alt = "logo">
    </img>

    {user && (
        <div className="flex items-center gap-2"> 

      {showGPTSearch && ( 
        <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLangChange}>
          {SUPPORTED_LANGS.map((lang) => 
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          )}
        </select>
        )}
        
        <button onClick = {handleGPTSearchClick}
        className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-md ">
          {showGPTSearch ? "Browse Page" : "GPT Search"}
          </button>
        
        <img alt="userIcon" src={USER_ICON} className="w-15 h-20"></img>
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
    </div>
    )}
    </div>);
};

export default Header;