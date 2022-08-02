import Form from "../components/Forms";
import { useState } from "react";
import { ITask } from "../types/ITask";
import List from "../components/List";
import Cronometer from "../components/Cronometer";
import "./style.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className="AppStyle">
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Cronometer />
    </div>
  );
}

export default App;
