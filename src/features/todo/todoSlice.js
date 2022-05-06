import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [
      { id: nanoid(), title: 'Découvrir React' },
      { id: nanoid(), title: 'Terminer React' },
      { id: nanoid(), title: 'Découvrir Redux' },
    ]
  },
  reducers: {
    add: (state, action) => {
      state.tasks.push( { id: nanoid(), title: action.payload.task } )
    },
    remove: (state, action) => {
      const index = state.tasks.findIndex( t => t.id === action.payload.id )
      state.tasks.splice(index, 1);
    }
  },
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;

export const todoSelector = (state) => state.todo.tasks;