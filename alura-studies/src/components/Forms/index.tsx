import React from "react";
import Button from "../Button";
import { ITask } from "../../types/ITask";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00",
  };

  addTask = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]);
    this.setState({
      task: "",
      time: "00:00",
    });
  };

  render(): React.ReactNode {
    return (
      <>
        <form className="newTask" onSubmit={this.addTask}>
          <div className="inputContainer">
            <label htmlFor="task">Add a new task</label>
            <input
              type="text"
              name="task"
              id="task"
              value={this.state.task}
              onChange={(event) =>
                this.setState({
                  ...this.state,
                  task: event.target.value,
                })
              }
              placeholder="What do you want to do?"
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              step="1"
              name="time"
              value={this.state.time}
              onChange={(event) =>
                this.setState({
                  ...this.state,
                  time: event.target.value,
                })
              }
              id="time"
              min="00:00:00"
              max="01:30:00"
              required
            />
          </div>
          <Button type="submit">Add Task</Button>
        </form>
      </>
    );
  }
}

export default Form;
