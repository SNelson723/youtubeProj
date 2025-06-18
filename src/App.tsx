import { useAppSelector, useAppDispatch } from "./hooks";
import { useEffect } from "react";

const App = () => {
  const app = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(app.url, app.apiKey, app.searchTerm);
  }, [app])

  return (
    <>
      <div className="text-red-500">Testing this out</div>
    </>
  );
};

export default App;
