import Button from "../Button";
import Clock from "./Clock";
import "./style.scss";

const Cronometer = () => {
  return (
    <div className="cronometer">
      <p className="title">Pick a card and start the counter!</p>
      <div className="relogioWrapper">
        <Clock />
      </div>
      <Button>Start!</Button>
    </div>
  );
};

export default Cronometer;
