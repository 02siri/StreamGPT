import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGPTSearch: false,
    },
    reducers:{
        //to show/hide Gpt search view
        toggleGPTSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
    }
});

export const {toggleGPTSearchView} = gptSlice.actions;

export default gptSlice.reducer;