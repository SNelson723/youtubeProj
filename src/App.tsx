import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-slate-800 text-white overflow-x-hidden">
      <SearchBar />
      <div className="flex h-[calc(100vh-7vh)]">
        <div className="w-[12%] overflow-y-auto">Sidebar Menu</div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
