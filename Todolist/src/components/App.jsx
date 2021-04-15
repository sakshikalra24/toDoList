import React from "react";
import listElement from "../listElement";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div>
      <h1 className="heading">My Tasks</h1>
      <ToDoList
        id={listElement[0].id}
        task={listElement[0].task}
        status={listElement[0].status.toString()}
      />
      <ToDoList
        id={listElement[1].id}
        task={listElement[1].task}
        status={listElement[1].status.toString()}
      />
      <ToDoList
        id={listElement[2].id}
        task={listElement[2].task}
        status={listElement[2].status.toString()}
      />
    </div>
  );
}

export default App;
