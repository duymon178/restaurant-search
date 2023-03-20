import { BsSearch } from "react-icons/bs";
import "../css/SearchBox.css";

export function SearchBox() {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Enter restaurant name..."
        className="search-box"
      />
      <BsSearch className="search-icon" />
    </div>
  );
}
