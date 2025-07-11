import { setSearchTerm, setResults } from "../features/appSlice";
import { useAppSelector, useAppDispatch } from "../hooks";
import { getVideos } from "../api/videosApi";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const app = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleClick = () => {
    getVideos(app.url, app.apiKey, app.searchTerm)
      .then((resp) => {
        const j = resp.data;
        navigate("/");
        dispatch(setSearchTerm(""));
        dispatch(setResults(j.items));
      })
      .catch((err) => console.log(err));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="w-full flex justify-center py-4">
      <input
        className="border-y-2 border-l-2 rounded-lg rounded-r-none py-0.5 px-1 w-[15%] bg-white/30 focus:outline-none"
        type="text"
        value={app.searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="border-2 rounded-r-lg border-slate-50 text-black font-semibold border-l-2-none px-3 bg-emerald-300"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
