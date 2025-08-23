import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: 'abdul rahim', number:'03151464618', email: 'rahim12@gmail.com', city:'lahore' },
    { id: 2, name: 'talha', number: '03349790979', email:'talha23@gmail.com', city:'islamabad' },
    { id: 3, name: 'ahmed', number: '0334286614', email:'ahmed85@gmail.com', city:'multan' }
  ],
  form: { name:'', number:'', email:'', city:'' },
  editButton: false,
  editIndex: null,
  searchResults: []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Update form inputs
    setForm: (state, action) => {
      state.form = action.payload;
    },

    // Add new user
    addUser: {
      reducer: (state, action) => {
        state.users.push(action.payload);
      },
      prepare: (user) => ({
        payload: { id: Date.now(), ...user }
      })
    },

    // Set up edit mode
    editUser: (state, action) => {
      const index = action.payload; // index of user to edit
      state.editButton = true;
      state.editIndex = index;
      state.form = { ...state.users[index] }; // populate form with existing user data
    },

    // Save edited user
    saveUser: (state, action) => {
      const { index, updatedUser } = action.payload;
      state.users[index] = updatedUser;
      state.editButton = false;
      state.editIndex = null;
      state.form = { name:'', number:'', email:'', city:'' }; // reset form
    },

    // Delete user by index
    deleteUser: (state, action) => {
      const index = action.payload;
      state.users = state.users.filter((_, idx) => idx !== index);
    },

    // Search users by name
    searchUser: (state, action) => {
      const keyword = action.payload.toLowerCase();
      state.searchResults = state.users.filter(user =>
        user.name.toLowerCase().includes(keyword)
      );
    },

    // Reset form (optional)
    resetForm: (state) => {
      state.form = { name:'', number:'', email:'', city:'' };
      state.editButton = false;
      state.editIndex = null;
    }
  }
});

export const { setForm, addUser, editUser, saveUser, deleteUser, searchUser, resetForm } = userSlice.actions;
export default userSlice.reducer;
