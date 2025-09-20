import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies", 
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        trendingMovies: null,
        comedyMovies: null,
        romanceMovies: null,
        thrillerMovies: null,
    },
    reducers: {
         addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload; //whatever will be the result of this payload will come into now playing movies
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addComedyMovies: (state, action) => {
            state.comedyMovies = action.payload;
        },
        addRomanceMovies: (state, action) => {
            state.romanceMovies = action.payload;
        },
        addThrillerMovies: (state, action) => {
            state.thrillerMovies = action.payload;
        }
    }
});

export const {
    addNowPlayingMovies, 
    addTrailerVideo, 
    addPopularMovies, 
    addTrendingMovies,
    addComedyMovies,
    addRomanceMovies,
    addThrillerMovies
} = moviesSlice.actions;

export default moviesSlice.reducer;