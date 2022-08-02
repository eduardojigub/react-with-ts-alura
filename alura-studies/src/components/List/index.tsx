import Item from "./Item/index";
import { ITask } from "../../types/ITask";
import "./style.scss";

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

const List = ({ tasks, selectTask }: Props) => {
  return (
    <aside className="taskList">
      <h2>Tasks of the day</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item selectTask={selectTask} key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
