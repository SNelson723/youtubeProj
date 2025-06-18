import { useAppSelector, useAppDispatch } from "../hooks";
import { useEffect, useRef } from "react";
import { type YTItem } from "../types";
import VideoCard from "../components/VideoCard";
import { getVideos } from "../api/videosApi";
import { setSearchTerm, setResults } from "../features/appSlice";

const Home = () => {
  const app = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getVideos(app.url, app.apiKey, " ")
      .then((resp) => {
        const j = resp.data;
        dispatch(setSearchTerm(""));
        dispatch(setResults(j.items));
      })
      .catch((err) => console.log(err));
  }, []);

  const calculateWidth = () => {
    if (!ref.current) return;
    const {width} = ref.current.getBoundingClientRect();
    console.log(width)
    return width / 3.75;
  };

  return (
    <div className="w-full min-h-screen bg-slate-800 text-white">
      <div ref={ref} className="flex flex-wrap justify-center">
        {app.results.length > 0
          ? app.results.map((video: YTItem) => (
              <VideoCard
                key={video.etag}
                title={video.snippet.title}
                description={video.snippet.description}
                videoId={video.id.videoId}
                thumbnail={video.snippet.thumbnails.high}
                channelTitle={video.snippet.channelTitle}
                width={calculateWidth() || video.snippet.thumbnails.high.width}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
