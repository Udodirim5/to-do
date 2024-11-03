import { useState } from "react";
import TodoLists from "./TodoLists";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import AddList from "./AddList";
import Footer from "./Footer";
import CustomDropdown from "./CustomDropdown";

// const x = [
//   { id: 1, title: "List 1", completed: false, description: "the yellow" },
// ];

const App = () => {
  // const [items, setItems] = useState(x);
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("input");
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAsideToggle = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  const handleAddItems = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleDeleteAllItem = () => {
    setIsModalOpen(true); // Show modal
  };

  const confirmDelete = () => {
    setItems([]);
    setIsModalOpen(false); // Hide modal
  };

  const cancelDelete = () => {
    setIsModalOpen(false); // Hide modal without deleting
  };

  const handleToggleCompleted = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <main className="App">
      <header className="header">
        <Logo />
        <SearchBox searchTerm={searchTerm} onSearchInput={handleSearchInput} />
      </header>
      <main className="App">
        <div className="add-list-div">
          <AddList
            onAddItems={handleAddItems}
            isAsideOpen={isAsideOpen}
            onAsideOpen={handleAsideToggle}
          />
        </div>
        <TodoLists
          items={items}
          selectedOption={selectedOption}
          onDeleteItem={handleDeleteItem}
          onToggleCompleted={handleToggleCompleted}
          searchTerm={searchTerm}
        />
      </main>
      {isAsideOpen ? (
        <aside>
          <hr />
          <CustomDropdown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <hr />
        </aside>
      ) : (
        ""
      )}
      <footer>
        <Footer
          items={items}
          onDeleteAllItem={handleDeleteAllItem}
          isModalOpen={isModalOpen}
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
        />
      </footer>
    </main>
  );
};

export default App;
