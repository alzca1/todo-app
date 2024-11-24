import { useState } from "react";
import { Todo } from "./Components/Todo/Todo";

function App() {
  const [todo, setTodo] = useState({
    id: 1,
    title: "This is a todo",
    plannedStart: new Date(),
    plannedEnd: new Date(),
    isCompleted: false,
  });

  const handleCompleted = (id: number): void => {
    console.log("finding id...", id);
    setTodo((prevState) => ({
      ...prevState,
      isCompleted: !prevState.isCompleted,
    }));
  };

  return <Todo toggleCompleted={handleCompleted} todoDetails={todo} />;
}

export default App;
