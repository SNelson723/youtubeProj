import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-slate-800 text-white overflow-x-hidden">
      <SearchBar />
      <div className="flex w-full">
        <div className="w-[10%]">Sidebar Menu</div>
        <div className="w-[90%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
