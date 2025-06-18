import { setSelectedVideo } from "../features/appSlice";
import { useAppDispatch } from "../hooks";

export type VideoCardProps = {
  videoId: string;
  title: string;
  description?: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  channelTitle: string;
};

const VideoCard = ({
  videoId,
  title,
  thumbnail,
  description = "",
  channelTitle
}: VideoCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(setSelectedVideo(videoId))}
      className="flex flex-col m-2 cursor-pointer border border-white/50 shadow-md shadow-lime-100/50"
    >
      <img
        src={thumbnail.url}
        height={thumbnail.height}
        width={thumbnail.width}
        alt={description}
      />
      <div>{title}</div>
      <div>{channelTitle}</div>
    </div>
  );
};

export default VideoCard;
