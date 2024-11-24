import { Checkbox, FormControlLabel } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface TodoProps {
  todoDetails: {
    id: number;
    title: string;
    plannedStart?: Date;
    plannedEnd?: Date;
    isCompleted: boolean;
  };
  toggleCompleted: (id: number) => void;
}

export const Todo: React.FC<TodoProps> = ({ todoDetails, toggleCompleted }) => {
  const { id, title, plannedStart, plannedEnd, isCompleted } = todoDetails;

  return (
    <div className="Todo">
      <FormControlLabel
        label={title}
        control={
          <Checkbox
            className="todo-checkbox"
            checked={isCompleted}
            inputProps={{ "aria-label": "controlled" }}
            onChange={() => toggleCompleted(id)}
          />
        }
      />
      <div className="planned-container">
        <CheckCircleOutlineIcon />
        <span>
          {plannedStart?.toLocaleDateString()} - {plannedEnd?.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};
