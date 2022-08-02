import "./style.scss";

interface Props {
  time: number | undefined;
}

const Clock = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutoDezena, minutoUnidade] = String(minutes).padStart(2, "0");
  const [segundoDezena, segundoUnidade] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className="clockNumber ">{minutoDezena}</span>
      <span className="clockNumber ">{minutoUnidade}</span>
      <span className="clockDivision">:</span>
      <span className="clockNumber ">{segundoDezena}</span>
      <span className="clockNumber ">{segundoUnidade}</span>
    </>
  );
};

export default Clock;
