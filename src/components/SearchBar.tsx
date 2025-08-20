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
  };

  return (
    <div className="fixed w-screen z-50 flex justify-center py-4 bg-[#181818]">
      <input
        className="border-y border-l rounded-l-full rounded-r-none py-2 px-1 w-[30%] bg-[#212121]/60 shadow-inner focus:outline-none"
        type="text"
        value={app.searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search"
      />
      <button
        className="border rounded-r-full font-semibold border-l-2-none px-3"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
