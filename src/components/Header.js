import {auth} from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

const user = useSelector(store=>store.user);
const navigate = useNavigate();

const handleSignOut = () => {
    signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  // An error happened.
  //navigate("/error");
});
}

return <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img
    className="w-44"
    src = "/logo.png"
    alt = "logo">
    </img>

    {user && (
        <div className="flex w-15 h-20 my-10"> 
        <img alt="userIcon" src="/UserIcon.png"></img>
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
    </div>
    )};
    </div>
};

export default Header;