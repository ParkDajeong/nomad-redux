import { createStore } from "redux";
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const addToDo = createAction("ADD_TODO");
const deleteToDo = createAction("DELETE_TODO");

// onsole.log(addToDo, deleteToDo); // f ADD_TODO f DELETE_TODO
// console.log(addToDo(), deleteToDo()); // {type: "ADD_TODO", payload: undefined} {type: "DELETE_TODO", payload: undefined}

// createReducer()를 이용하면 state를 바로 수정 할 수 있다.
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.unshift({ id: Date.now(), text: action.payload });
  },
  [deleteToDo]: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
});

// configureStore() => Redux DevTools 활성화됨.
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
