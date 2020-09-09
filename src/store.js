import { createStore } from "redux";
import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";

// const addToDo = createAction("ADD_TODO");
// const deleteToDo = createAction("DELETE_TODO");

// // createReducer()를 이용하면 state를 바로 수정 할 수 있다.
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.unshift({ id: Date.now(), text: action.payload });
//   },
//   [deleteToDo]: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => state.unshift({ id: Date.now(), text: action.payload }),
    remove: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
  },
});

// configureStore() => Redux DevTools 활성화됨.
const store = configureStore({ reducer: toDos.reducer });

console.log(toDos.actions); // {add: ƒ, remove: ƒ}

export const { add, remove } = toDos.actions;

export default store;
