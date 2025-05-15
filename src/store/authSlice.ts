'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@/types/user';

export interface AuthState {
    user: User | null;
    isAuth: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    isAuth: false,
    loading: false,
    error: null,
};

export const fetchMe = createAsyncThunk('auth/fetchMe', async (_, thunkAPI) => {
    try {
        const res = await axios.get<User>('http://localhost:3000/auth/me', {
            withCredentials: true,
        });
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue('Не удалось получить данные');
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.isAuth = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMe.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMe.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuth = true;
                state.loading = false;
            })
            .addCase(fetchMe.rejected, (state, action) => {
                state.user = null;
                state.isAuth = false;
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
