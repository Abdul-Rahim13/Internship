import { createAction, nanoid, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';

export default function CreateSLiceProegct() {
    const initialState = {
    counter: 0
}

    //                           CREATE SLICE
    // it doesnot use swtich or case statement
    // each slice reducer 'owns" its state independently

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        counter:0
    },
    reducers:{
        increment: (state) => {
            state.counter +=1
        },

        decrement: (state) => {
            state.counter -=1
        },

        reset: (state, action) => {
            state.counter = 0
        },

        incrementBy: (state, action) =>{
            state.counter += action.payload
        }

    }
})

const {increment, decrement, reset, incrementBy} = counterSlice.actions
const counterReducer = counterSlice.reducer
const store = configureStore({
    reducer: counterReducer
})

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(incrementBy(200))
console.log(store.getState())


  return (
    <div>CreateSLiceProegct</div>
  )
}
