import React from "react";
import Item from "./Item/index";
import "./style.scss";

const List = () => {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Javascript",
      time: "01:00:00",
    },
    {
      task: "Typescript",
      time: "03:00:00",
    },
  ];
  return (
    <aside className="taskList">
      <h2>Tasks of the day</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} task={item.task} time={item.time} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
