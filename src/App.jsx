import { Category } from "./components/Category";
import { Restaurant } from "./components/Restaurant";
import { SearchBox } from "./components/SearchBox";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <SearchBox />
        <div className="app-category">
          <Category />
        </div>
        <Restaurant />
      </div>
    </div>
  );
}

export default App;
