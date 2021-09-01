import "./searchbar.scss";
import { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";

const Searchbar = () => {
  const [searchInputToggle, setSearchInputToggle] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const searchbarRef = useRef();
  const searchInputRef = useRef();

  const handleSearchInputToggle = () => {
    searchInputRef.current.focus();
    setSearchInputToggle(!searchInputToggle);
  };

  const clearSearchInputToggle = () => {
    setSearchInput("");
    // dispatch(clearSearchInputValue());
    // history.push("/browse");
  };

  const handleSearchInput = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    // dispatch(changeSearchInputValue(value));

    if (value.length > 0) {
      //   history.push(`/search?q=${value}`);
      //   dispatch(fetchSearchResultsAsync(value));
      // } else history.push("/browse");
    }
  };

  return (
    <div className="Searchbar" ref={searchbarRef}>
      <input
        type="text"
        placeholder="Search titles, people"
        value={searchInput}
        onChange={handleSearchInput}
        ref={searchInputRef}
        className={`Searchbar--search ${
          searchInputToggle && "Searchbar--active"
        }`}
      />
      <div className="Searchbar--toggler" onClick={handleSearchInputToggle}>
        <FiSearch size="1.5em" />
      </div>
      <div
        className={`Searchbar--clear ${
          searchInputToggle && searchInput.length && "typing"
        }`}
        onClick={clearSearchInputToggle}
      >
        <RiCloseFill />
      </div>
    </div>
  );
};

export default Searchbar;
