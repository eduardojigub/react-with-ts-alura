import { ITask } from "../../../types/ITask";
import "./style.scss";

const Item = ({ task, time, selected, completed, id }: ITask) => {
  return (
    <li className="item">
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Item;
