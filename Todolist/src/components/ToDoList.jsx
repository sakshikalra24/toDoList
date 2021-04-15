import React from "react";

function toDoList(props) {
  return (
    <div>
      <ul>
        <li>
          <tr>
            <td>
              {props.id}, {props.task}, {props.status}
            </td>
            <td>
              <input type="checkBox"></input>
            </td>
          </tr>
        </li>
      </ul>
    </div>
  );
}

export default toDoList;
