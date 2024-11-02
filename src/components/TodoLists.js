import { Button } from "./Button";

const TodoLists = ({ items, onDeleteItem, onToggleCompleted, selectedOption }) => {
  let sortedItem;

  if (selectedOption === "input") sortedItem = items;
  if (selectedOption === "title")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (selectedOption === "completed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <div className="TodoLists">
      {sortedItem.length > 0 ? (
        sortedItem.map((item) => (
          <TodoCard
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleCompleted={onToggleCompleted}
          />
        ))
      ) : (
        <p className="empty">No tasks to display</p>
      )}
    </div>
  );
};
const TodoCard = ({ item, onDeleteItem, onToggleCompleted }) => {
  return (
    <div className="TodoCard" style={item.completed ? { opacity: "0.4" } : {}}>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
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
      </div>
    </div>
  );
};

export default TodoLists;
