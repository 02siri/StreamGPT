# Stream GPT
- Create React App 
- Configured Tailwind CSS 
- Header
- Routing of App
- Login Form [ Can use Formik library for form building]
- Sign Up Form
- Form validation
    - useRef hook
- Firebase Setup & Deployment:
    0. Install Firebase CLI: npm install -g firebase-tools 
    1. Firebase login - firebase login
    2. Initialise Firebase - firebase init -> select Hosting
        2.1 : Build : npm run build
    3. Deploy Command - firebase deploy
- Create SignUp User Account 
- Implement Sign In User API 
- Created Redux Store with User Slice 
    - npm i -D @reduxjs/toolkit
    - npm i react-redux
- Implemented Sign Out 
- Update Profile API call
- BugFix : Sign up user display name and profile picture update
- BugFix : If the user is not logged in - Redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the /utils/constants file
- Register for TMDB API & create a new app & get API access token
- Go to documentation -> get data from TMDB 'Now playing' movies list
- Custom Hook for Now Playing Movies
- Create movieSlice 
- Update the store with movies data
- Planning for MainContainer and Secondary Container
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the YT video and make it autoplay and mute
- Tailwind classes to make main container look as close as Netflix 

# Features:
- Login/Sign Up
    - Sign In/up Form
    - redirect to browse page when logged in 

- Browse Page (after authentication): 
    - Header
    - Main Movie
        - Trailer in Bg
        - Movie Title & Description
        - Movie suggestions 
            - Movie Lists * N (Lot of)

- Stream GPT
    - Search Bar
    - Movie suggestions

# Routing 
- npm i -D react-router-dom
