import Form from "../components/Forms";
import { useState } from "react";
import { ITask } from "../types/ITask";
import List from "../components/List";
import Cronometer from "../components/Cronometer";
import "./style.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask);
    setTasks((previousTasks) =>
      previousTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  };

  return (
    <div className="AppStyle">
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Cronometer />
    </div>
  );
}

export default App;
