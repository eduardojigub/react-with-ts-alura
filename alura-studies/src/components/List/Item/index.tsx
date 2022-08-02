import "./style.scss";

const Item = (props: { task: string; time: string }) => {
  const { task, time } = props;

  return (
    <li className="item">
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Item;
