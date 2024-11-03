const SearchBox = ({searchTerm, onSearchInput}) => {
  return (
    <form className="search">
      <input
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchInput}
      />
    </form>
  );
};

export default SearchBox;
