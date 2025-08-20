import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div
      className="bg-[#181818] text-white"
      style={{ overscrollBehaviorX: "none" }}
    >
      <SearchBar />
      <div className="flex min-h-[calc(100vh-7vh)]">
        <SideBar />
        <div
          className="flex-1 overflow-y-auto"
          style={{
            backgroundColor: "#181818",
            paddingTop: "8vh",
            marginLeft: "215px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
