import { useState } from "react";
import { Category } from "./components/Category";
import { RestaurantList } from "./components/RestaurantList";
import { SearchBox } from "./components/SearchBox";
import "./css/App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("0");

  return (
    <div className="App">
      <div className="app-container">
        <SearchBox
          searchTerm={searchTerm}
          onSearch={(event) => setSearchTerm(event.target.value)}
        />
        <div className="app-category">
          <Category category={category} setCategory={setCategory} />
        </div>
        <RestaurantList searchTerm={searchTerm} category={category} />
      </div>
    </div>
  );
}

export default App;
