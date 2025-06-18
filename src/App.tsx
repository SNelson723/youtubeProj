import SearchBar from "./components/SearchBar";
import { useAppSelector, useAppDispatch } from "./hooks";
import { useEffect } from "react";

const App = () => {
  const app = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(app.url, app.apiKey, app.searchTerm);
  }, [app])

  return (
    <div className="w-screen h-screen bg-slate-800 text-white">
      <SearchBar />
    </div>
  );
};

export default App;
