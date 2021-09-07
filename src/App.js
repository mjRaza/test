import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Recent from "./components/RecentPage/Recent";
import Rent from "./components/RentPage/Rent";
import SearchPage from "./components/SearchPage/SearchPage";
function App() {
  return (
    <div>
      <div className="navBar">
        <NavBar />
      </div>
      <div>
        <SearchPage />
      </div>
      <div>
        <Rent />
      </div>    <div>
        <Recent />
      </div>
    </div>
  );
}

export default App;
