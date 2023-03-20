import { useState } from "react";
import { SearchBox } from "./components/SearchBox";
import { Category } from "./components/Category";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <SearchBox />
        <div className="app-category">
          <Category />
        </div>
      </div>
    </div>
  );
}

export default App;
