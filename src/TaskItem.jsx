import React from "react";

const TaskItem = ({ task }) => {
  console.log("TaskItem rendered", task);
  return <li>{task}</li>;
}

export default React.memo(TaskItem);

