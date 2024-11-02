import { useState } from "react";

const AddList = ({ onAddItems, onAsideOpen, isAsideOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newItems = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
    };
    onAddItems(newItems);

    setIsOpen(false);
    setTitle("");
    setDescription("");
  };

  return (
    <div className={isOpen ? "AddList AddList-IsOpen" : "AddList"}>
      <h2>Write It Down So You Don't Forget it</h2>
      <button onClick={toggleOpen}>
        {!isOpen ? "Add List" : "Close List"}
      </button>
      <div className="more">
        <button onClick={onAsideOpen}>{ isAsideOpen ? "close" : "more"}</button>
      </div>

      {isOpen && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a new list"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Add a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default AddList;
