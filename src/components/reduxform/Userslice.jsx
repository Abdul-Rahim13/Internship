import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: [
        {id: 1,name: 'abdul rahim', number:'03151464618', email: 'rahim12@gmail.com', city:'lahore'},
        {id: 2,name: 'talha', number: '03349790979', email:'talha23@gmail.com', city:'islamabad'},
        {id: 3,name: 'ahmed', number: '0334286614', email:'ahmed85@gmail.com', city:'multan'}
    ],
    form : {name:'', number: 0, email:'', city:'',},
    editButton: false,
    searchResults: []
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        saveUser:(state, action) => {

            if (state.editButton){
                const index = state.users.findIndex((user) => (
                    user.id === action.payload.id
                ))
                if(index !== -1){
                    state.users[index] = {...state.users[index], ...action.payload}
                }
                state.editButton = false
            } else{

                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    if(!emailPattern.test(action.payload.email)){
                        alert("please Enter a valid Email Address")
                        return
                    }

                const duplicateEmail = state.users.find ((item) => (
                        item.email === action.payload.email))
                    if (duplicateEmail){
                        alert("Email already exsist")
                        return
                    }
                const newUser = {
                    id: Date.now(),
                    name: action.payload.name,
                    number: action.payload.number,
                    email: action.payload.email, 
                    city: action.payload.city,
                }
                
                state.users.push(newUser)
            }
            state.form = { name: '', number: 0, email: '', city: '' }
        },
        editUser:(state, action) => {
            state.editButton = true
            const userToEdit = state.users.find((user) => (
                user.id === action.payload
            ))
            state.form = {...userToEdit}
        },
        deleteUser:(state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        },
        searchUser:(state, action) => {
            const keyword = action.payload.toLowerCase()
            state.searchResults = state.users.filter((item) => {
                return item.name.toLowerCase().includes(keyword)
            })

        }
    }
})

export const {saveUser, editUser, deleteUser, searchUser} = userSlice.actions
export default userSlice.reducer

export const Store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})