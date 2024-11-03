const TodoDetail = ({ item, onToggleDetails }) => {
  return (
    <div className="TodoDetail">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <button onClick={onToggleDetails}>❌</button>
    </div>
  );
};

export default TodoDetail;
