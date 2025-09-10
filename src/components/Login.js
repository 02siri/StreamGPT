//rafce -> react arrow function component export
//use Ref hook : lets you reference a value that's not needed for rendering
import Header from "./Header";
import { useState } from "react";
import { useRef } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login =() =>{
const [isSignInForm, setIsSignInForm] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);

const name = useRef(null);
const number = useRef(null);
const email = useRef(null);
const password = useRef(null);

const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
};

const handleButtonClick = () =>{
    //validate form data 
    //logic in /utils/validate.js
   const message = checkValidData(email.current.value, password.current.value);
   setErrorMessage(message);

   if(message) return;

   //Sign Up Logic 
   if(!isSignInForm){

    createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
    )
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage);
  });

   }else{
    //SignIn Logic
    signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
    )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage);
  });
   }
}

    return <div>
        <Header/>
        <div className="absolute inset-0 w-full h-full">
            <img 
              src="/bg.png" 
              alt="bg" 
              className="w-full h-full object-cover" 
            />
        </div>

        <form onSubmit={(e)=>e.preventDefault()} 
        className="w-4/12 absolute p-9 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && ( <>
            <input 
            ref = {name}
            type="text" 
            placeholder="Name" 
            className = "p-4 my-4 w-full bg-gray-700"> 
            </input>
            
            <input 
            ref={number}
            type="text" 
            placeholder="Phone Number" 
            className = "p-4 my-4 w-full bg-gray-700"> 
            </input>
            </>
            )}
            <input 
            ref={email}
            type="text" 
            placeholder="Email Address" 
            className = "p-4 my-4 w-full bg-gray-700"> 
            </input>
            <input 
            ref={password}
            type="password" 
            placeholder="Password" 
            className = "p-4 my-4 w-full bg-gray-700">
            </input>

            <p className="text-red-500 underline font-bold text-lg py-2">{errorMessage}</p>

            <button 
            className="p-4 my-6 bg-red-700 w-full rounded-lg" 
            onClick={handleButtonClick}>
            {isSignInForm? "Sign In" : "Sign Up"}</button>

            <p className="py-4 cursor-pointer underline" onClick = {toggleSignInForm}>{isSignInForm? "New to StreamGPT? Sign Up Now!" : "Already registered? Sign In Now"}</p>
        </form>
    </div>
};

export default Login;

//in firebase.js
//export const auth = getAuth();