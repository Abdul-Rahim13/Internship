import {createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit"
import axios from "axios";

function Reduxasyncthunk() {

    //              REDUC-ASYNC-THANK
    // Initial State
    // Create Async Thunk
    // Slice
    const API = "https://jsonplaceholder.typicode.com/posts"

    const initialState = {
        posts: [],
        loading: false,
        error: null
    }

    const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
        const response = await axios.get(API)
        return response.data
    })

    const UserSlice = createSlice({
        name: 'posts',
        initialState,
        extraReducers: (builder)=> {      // whenever we use asyncthunk we use extrareducers instead of simple reducers so this one ise used to handle promise based action
            builder.addCase(fetchPosts.pending,  (state, action) => {
                state.loading = true
            })

            builder.addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })

            builder.addCase(fetchPosts.rejected, (state, action) => {
                state.posts = []
                state.loading = false
                state.error = action.error.message
            })

        }
    })

    const Store = configureStore({
        reducer: UserSlice.reducer
    })

    Store.subscribe(() => {
        console.log(Store.getState())
    })

    Store.dispatch(fetchPosts())








  return (
    <div></div>
  )
}

export default Reduxasyncthunk