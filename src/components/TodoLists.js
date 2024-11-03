import { Button } from "./Button";

const TodoLists = ({ items, onDeleteItem, onToggleCompleted, selectedOption, searchTerm }) => {
  // Filter items based on the query (if provided)
  let filteredItems = items.filter(item =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply sorting based on selected option
  let sortedItem;
  if (selectedOption === "input") sortedItem = filteredItems;
  if (selectedOption === "title")
    sortedItem = filteredItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (selectedOption === "completed")
    sortedItem = filteredItems
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
