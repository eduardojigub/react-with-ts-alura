import "./style.scss";

interface Props {
  time: number | undefined;
}

const Clock = ({ time }: Props) => {
  return (
    <>
      <span className="clockNumber ">0</span>
      <span className="clockNumber ">0</span>
      <span className="clockDivision">:</span>
      <span className="clockNumber ">0</span>
      <span className="clockNumber ">0</span>
    </>
  );
};

export default Clock;
