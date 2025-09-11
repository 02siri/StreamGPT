import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null, //no user -> make it null
    reducers:{
        addUser: (state, action)=>{
            return action.payload;

            //initial State: null
            //if creating a user: state will become : action.payload
        },
        removeUser: (state, action) => {
        return null;
        },
    },
});

export const{addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;