import { Category } from "./components/Category";
import { RestaurantList } from "./components/RestaurantList";
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
        <RestaurantList />
      </div>
    </div>
  );
}

export default App;
