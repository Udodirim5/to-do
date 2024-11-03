import TodoCard from "./TodoCard";

const TodoLists = ({
  items,
  onDeleteItem,
  onToggleCompleted,
  selectedOption,
  searchTerm,
}) => {
  // Filter items based on the query (if provided)
  let filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
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

export default TodoLists;
