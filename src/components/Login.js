//rafce -> react arrow function component export
import Header from "./Header";
import { useState } from "react";

const Login =() =>{
const [isSignInForm, setIsSignInForm]=useState(true);

const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
}

    return <div>
        <Header/>
        <div className="absolute">
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/AU-en-20250901-TRIFECTA-perspective_f4085fc6-87a7-4a5d-9d0a-8aa88de40aa9_large.jpg"
        alt = "logo">
        </img>
        </div>

        <form 
        className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && ( <>
            <input 
            type="text" 
            placeholder="Name" 
            className = "p-4 my-4 w-full bg-gray-700"> 
            </input>
            
            <input 
            type="text" 
            placeholder="Phone Number" 
            className = "p-4 my-4 w-full bg-gray-700"> 
            </input>
            </>
            )}
            <input 
            type="text" 
            placeholder="Email Address" 
            className = "p-4 my-4 w-full bg-gray-700"> 
            </input>
            <input 
            type="password" 
            placeholder="Password" 
            className = "p-4 my-4 w-full bg-gray-700">
            </input>
            <button 
            className="p-4 my-6 bg-red-700 w-full rounded-lg">
            {isSignInForm? "Sign In" : "Sign Up"}</button>

            <p className="py-4 cursor-pointer underline" onClick = {toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now!" : "Already registered? Sign In Now"}</p>
        </form>
    </div>
};

export default Login;