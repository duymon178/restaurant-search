import { BsSearch } from "react-icons/bs";
import "../css/SearchBox.css";

export function SearchBox({ searchTerm, onSearch }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearch}
        placeholder="Enter restaurant name..."
        className="search-box"
      />
      <BsSearch className="search-icon" />
    </div>
  );
}
