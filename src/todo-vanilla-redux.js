import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => ({ type: ADD_TODO, text });
const deleteToDo = (id) => ({ type: DELETE_TODO, id });

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ id: Date.now(), text: action.text }, ...state];
    case DELETE_TODO:
      const newToDos = state.filter((toDo) => toDo.id !== action.id);
      return newToDos;
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = Number(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";

  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDo);

const onSubmit = (e) => {
  e.preventDefault();
  const text = input.value;
  dispatchAddToDo(text);
  input.value = "";
  input.focus();
};

form.addEventListener("submit", onSubmit);
