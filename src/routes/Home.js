import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDoList, addToDo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDoList.map((toDo) => {
          return (
            <ToDo //
              key={toDo.id}
              {...toDo}
            />
          );
        })}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return { toDoList: state };
};

const mapDispatchToProps = (dispatch) => {
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
