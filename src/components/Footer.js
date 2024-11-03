import Button from "./Button";

const Footer = ({
  items,
  onDeleteAllItem,
  isModalOpen,
  confirmDelete,
  cancelDelete,
}) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Things You Should!</em>
      </p>
    );

  const numItems = items.length;
  const numCompleted = items.filter((item) => item.completed).length;
  const percentage =
    numItems > 0 ? Math.round((numCompleted / numItems) * 100) : 0;
  const nunUncompleted = numItems - numCompleted;

  return (
    <>
      <p>
        {numItems > 0 && percentage === 100
          ? "You've completed all your tasks!"
          : `You have completed ${numCompleted} (${percentage}%), Keep going! You still have ${nunUncompleted} more thing(s) to do `}
      </p>
      {items.length > 0 ? (
        <Button text="Clear All" color="#3B82F6" onClick={onDeleteAllItem} />
      ) : (
        ""
      )}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to delete all items?</p>
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
