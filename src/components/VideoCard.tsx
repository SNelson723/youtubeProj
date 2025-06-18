import { setSelectedVideo } from "../features/appSlice";
import { useAppDispatch } from "../hooks";

export type VideoCardProps = {
  videoId: string;
  title: string;
  description: string;
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
  description,
  thumbnail,
  channelTitle
}: VideoCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(setSelectedVideo(videoId))}
      className="flex flex-col m-2 cursor-pointer"
    >
      <img
        src={thumbnail.url}
        height={thumbnail.height}
        width={thumbnail.width}
      />
      <div>{title}</div>
      <div>{channelTitle}</div>
      {/* <div>{description}</div> */}
    </div>
  );
};

export default VideoCard;
