import { setSearchTerm } from "../features/appSlice";
import { useAppSelector, useAppDispatch } from "../hooks";
import { getVideos } from "../api/videosApi";

const SearchBar = () => {
  const app = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleClick = () => {
    getVideos(app.url, app.apiKey, app.searchTerm)
      .then((resp) => {
        const j = resp.data;
        dispatch(setSearchTerm(""));
        console.log('howdy', j)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full flex justify-center py-4">
      <input
        className="border-y-2 border-l-2 rounded-lg rounded-r-none py-0.5 px-1 w-[15%] bg-white/30 focus:outline-none"
        type="text"
        value={app.searchTerm}
        onChange={handleChange}
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
