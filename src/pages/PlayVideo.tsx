import YouTube, { type YouTubeProps } from 'react-youtube';
import { useAppSelector } from '../hooks';

const PlayVideo = () => {
  const { selectedVideo } = useAppSelector((state) => state.app);
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="px-4">
      <div>Play the video</div>
      <YouTube videoId={selectedVideo} opts={opts} onReady={onPlayerReady} />;
    </div>
  );
};

export default PlayVideo;