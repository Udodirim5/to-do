const SearchBox = ({searchTerm, onSearchInput}) => {
  return (
    <form className="search">
      <input
        type="search"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={onSearchInput}
      />
    </form>
  );
};

export default SearchBox;
