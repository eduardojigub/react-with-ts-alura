import Item from "./Item/index";
import { ITask } from "../../types/ITask";
import "./style.scss";

const List = ({ tasks }: { tasks: ITask[] }) => {
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
