import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        displayName: '',
        uid: '',
    },
    reducers: {
        authUser: (state, action) => {
            state.displayName = action.payload.displayName;
            state.uid = action.payload.uid;
        }
    },
});

export const { authUser } = userSlice.actions; 
export default userSlice.reducer;