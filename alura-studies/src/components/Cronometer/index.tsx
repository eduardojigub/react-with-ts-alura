import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/timeToSeconds";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";
import "./style.scss";

interface Props {
  selected: ITask | undefined;
}

const Cronometer = ({ selected }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected?.time));
    }
  }, [selected]);

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      }
    }, 1000);
  }
  return (
    <div className="cronometer">
      <p className="title">Pick a card and start the counter!</p>
      <div className="relogioWrapper">
        <Clock time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Start!</Button>
    </div>
  );
};

export default Cronometer;
