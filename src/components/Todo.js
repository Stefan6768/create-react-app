import React from "react";
import Todo from "./components/Todo";


export default function Todo() {
  return (
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      <Todo name="Eat" />
      <Todo name="Sleep" />
      <Todo name="Repeat" />

    </ul>
  );
}
