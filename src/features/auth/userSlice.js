import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    username: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.username = action.payload.username
        },
        logout: state => {
            state.isAuthenticated = false;
            state.username = '';
        }
    }
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;