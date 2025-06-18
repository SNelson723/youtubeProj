import SearchBar from "../components/SearchBar";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { type YTItem } from "../types";
import VideoCard from "../components/VideoCard";
import { getVideos } from "../api/videosApi";
import { setSearchTerm, setResults } from "../features/appSlice";

const Home = () => {
  const app = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getVideos(app.url, app.apiKey, ' ')
      .then(((resp) => {
        const j = resp.data;
        dispatch(setSearchTerm(''));
        dispatch(setResults(j.items));
      }))
      .catch((err) => console.log(err)); 
  }, []);

  return (
    <div className="w-screen min-h-screen bg-slate-800 text-white">
      <SearchBar />
      <div className="grid grid-cols-3">
        {app.results.length > 0
          ? app.results.map((video: YTItem) => (
              <VideoCard
                title={video.snippet.title}
                description={video.snippet.description}
                videoId={video.id.videoId}
                thumbnail={video.snippet.thumbnails.medium}
                channelTitle={video.snippet.channelTitle}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
