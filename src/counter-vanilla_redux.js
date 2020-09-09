import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");
number.innerText = 0;

const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";

const reducer = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// let count = 0;
const store = createStore(reducer);

// const updateText = () => {
//   number.innerText = count;
// };
const onChange = () => {
  number.innerText = store.getState();
};

store.subscribe(onChange);

// const handlePlus = () => {
//   count = count + 1;
//   updateText();
// };
// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };
const handlePlus = () => {
  store.dispatch({ type: PLUS });
};

const handleMinus = () => {
  store.dispatch({ type: MINUS });
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
