import { ITask } from "../../../types/ITask";
import "./style.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

const Item = ({ task, time, selected, completed, id, selectTask }: Props) => {
  return (
    <li
      className={`"item" ${selected ? "itemSelected" : ""}`}
      onClick={() =>
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Item;
