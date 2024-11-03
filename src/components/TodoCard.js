import { useState } from "react";
import Button from "./Button";
import TodoDetail from "./TodoDetail";

const TodoCard = ({ item, onDeleteItem, onToggleCompleted }) => {
  const [isDetailed, setIsDetailed] = useState(false);

  const limitText = (text, limit = 100) => {
    if (text.length > limit) {
      return text.substr(0, limit) + "...";
    }
    return text;
  };

  const toggleDetails = () => setIsDetailed(!isDetailed);

  return (
    <div className="TodoCard" style={item.completed ? { opacity: "0.4" } : {}}>
      <h1>{item.title}</h1>
      <p>
        {limitText(item.description)}
        {item.description.length > 100 ? (
          <span className="see-more" onClick={toggleDetails}>see more</span>
        ) : (
          ""
        )}{" "}
      </p>
      <div className="list-action">
        <Button
          text="Mark as Completed"
          color="#3B82F6"
          onClick={() => onToggleCompleted(item.id)}
        />
        <Button
          text="Delete Task"
          color="#fff"
          bgColor="#3B82F6"
          onClick={() => onDeleteItem(item.id)}
        />
        {isDetailed ? (
          <TodoDetail item={item} onToggleDetails={toggleDetails} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TodoCard;
