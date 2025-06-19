import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="608099569068-qfobo7h206oe76dj79fgham6ilbmsk37.apps.googleusercontent.com">
      <div className="w-screen min-h-screen bg-slate-800 text-white overflow-x-hidden">
        <SearchBar />
        <div className="flex h-[calc(100vh-7vh)]">
          <SideBar />
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
