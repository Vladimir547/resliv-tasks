import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      users: [],
      isLoaded: false,
      error: false,
    },
    reducers: {
        deleteUser: (state, action) => {
            state.users.splice(action.payload, 1);
        },
        addAllUsers: (state, action) => {
            state.users = action.payload;
        },
        addNewUser: (state, action) => {
          state.users.push(action.payload);
        }
    }
  });
  
 export const { deleteUser, addAllUsers, addNewUser } = userSlice.actions;
  
  export const selectUsers = state => state.user.users;

  export const userById = ( state, index) => {
    return state.user.users[index];
};
  export default userSlice.reducer;
  