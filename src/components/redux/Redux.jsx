import { createAction, nanoid, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';

function Redux() {
    // Redux is like a big box where you keep all the important data (state) of your React app in one place
    // In normal each componenets manage its own state but when there is big appliction it becomes messy So, Redux solve this problem by giving you one central store where all componenet can get data or update data

    // How Redux Works:
    //1. Action: its like Request or Perform Action (like in online banking person can withdraw , deposit or transfer money )
    //2. Store:  the box that hold your data (your Bank will act as a store to store your all money)
    //3. Reducer:
    //4. Dispatch: A way to send ACTION to the user 
    // some ACTION is performed and then it is Dispatched to Store then STORE will notify to all REDUCERS then REDUCER listen from STORE and then REDUCER will send back updated data to STORE and then STORE give new data to users

    //  RTK Common API'S:
    //                            CREATE ACTION 
    // it can be called with or without payload -> (detalis we needed to do)
    // by default it accpets one parameter (action type) but it  can be customized 
         
    //                              STEPS TO CREATE CreateAction:
    //    1. InitialState
    //    2. Action creator - Action
    //    3. Reducer
    //    4. Store


    const initialState = {
        counter: 0
    }

    const increment = createAction("INCREMENT")
    const decrement = createAction("DECREMENT")
    const resetCounter = createAction("RESET")
    const incrementBy = createAction("INCREMENT_BY", (amount) =>{
        return{
            payload: {
                amount
            }
        }
    })

    //                            CREATE REDUCER
    // it can be created in 2 ways:
    //1. Builder callback notation
    //2. map object notation

   const counterSlice =  createReducer(initialState, (builder) => {
        builder.addCase(increment, (state)=>{
            state.counter +=1
        })
        builder.addCase(decrement, (state) => {
            state.counter -=1
        })
        builder.addCase(resetCounter, (state) => {
            state.counter = 0
        })
        builder.addCase(incrementBy, (state, action) => {
            state.counter += action.payload.amount
        })
    })

    //                            CREATE STORE

    const store = configureStore( {
        reducer: counterSlice
    })

    //                           DISPATCH ACTION
    store.dispatch(increment())
    store.dispatch(decrement())
    store.dispatch(incrementBy(10))
    console.log(store.getState())


  return (
  <div>

  </div>
  )
}

export default Redux