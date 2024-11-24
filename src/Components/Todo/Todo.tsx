interface TodoProps {
  title: string;
  due: Date;
  isCompleted: boolean;
  toggleCompleted: () => void;
}

export const Todo: React.FC<TodoProps> = ({ title, due, isCompleted, toggleCompleted }) => {
  return <div className="Todo">Hello universe</div>;
};
