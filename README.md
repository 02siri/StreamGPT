
# StreamGPT
<img width="1891" height="948" alt="Screenshot 2025-11-29 at 5 21 10 pm" src="https://github.com/user-attachments/assets/77bf8b3f-2fac-4f94-a1c6-06b78a65ee66" />


https://streamgpt-fbfdc.web.app

A smart, interactive movie-streaming application inspired by Netflix, built with **React, Redux, Firebase**, and integrated with **TMDB** and **Gemini AI** to provide **AI-powered movie recommendations**.

StreamGPT delivers a seamless, modern streaming UI with dynamic trailers, curated content sections, secure authentication, and an intelligent GPT-style movie search system.


## Features

**Authentication (Firebase)**

- User Sign Up & Sign In
- Form validation
- Firebase user creation & profile update
- Secure auth state handling
- Sign Out

**Browse Page**

***Header***
- Navigation bar
- Sign Out option
- App branding

***Main Movie Section***
- Auto-playing, YouTube movie trailer
- Movie title & description
- Large hero layout

***Movie Lists***
- Multiple horizontal scroll sections for:
    - Now Playing
    - Trending
    - Popular
    - Comedy
    - Romance
    - Thriller
- Movie cards built with TMDB Image CDN
- Custom components for modularity

**AI-Powered Search**

A standalone GPT-style search feature where users can:
- Enter any movie query
- Get AI-generated movie ideas using Gemini API
- Automatically fetch results from TMDB
- Display suggestions using existing Movie List UI

**Multi-Language Support**

- Language toggle for GPT Search
- Supports multiple languages for the search interface
## Deployment & Hosting (Firebase)

StreamGPT is hosted using Firebase Hosting, which provides fast, secure, and globally distributed delivery for the application. Firebase also manages user authentication and ensures smooth deployment of production builds.

## Tech Stack

**Frontend:** 
- React.js 
- JavaScript
- TailwindCSS
- Redux Toolkit

**Backend/APIs:** 
- TMDB API
- Gemini API

**Auth/Hosting:** 
- Firebase Authentication
- Firebase Hosting




## Run Locally

1. Clone the project

```bash
  git clone <your-repo-url>
```

2. Install dependencies

```bash
  npm install
```

3. Run the project

```bash
  npm start
```

4. Build for production
```bash
  npm run build
```

5. Deplot (Firebase)
```bash
  firebase deploy
```
