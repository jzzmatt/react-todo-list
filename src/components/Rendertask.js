import React from "react";

const Rendertask = props => {
  return (
    <ul>
      {props.todolist.map(task => (
        <li>{task}</li>
      ))}
    </ul>
  );
};

export default Rendertask;
//export default (Rendertask = props => <div>props.tasks</div>);
