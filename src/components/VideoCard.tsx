import { setSelectedVideo } from "../features/appSlice";
import { useAppDispatch } from "../hooks";
import { decodeHTMLEntities } from "../utils.ts";

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
  width: number;
};

const VideoCard = ({
  videoId,
  title,
  thumbnail,
  description = "",
  channelTitle,
  width,
}: VideoCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(setSelectedVideo(videoId))}
      className="flex flex-col m-2 cursor-pointer shadow-md bg-slate-50/20 rounded-xl"
      style={{ width: width }}
    >
      <img
        className="rounded-t-xl"
        src={thumbnail.url}
        height={thumbnail.height}
        width={width}
        alt={description}
      />
      <div className="text-wrap">{decodeHTMLEntities(title)}</div>
      <div>{decodeHTMLEntities(channelTitle)}</div>
    </div>
  );
};

export default VideoCard;
