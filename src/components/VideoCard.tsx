import { useAppSelector } from "../hooks";

const VideoCard = () => {
  const { results } = useAppSelector((state) => state.app);

  if (results.length === 0) return null;

  return (
    <div>
      Found Results
    </div>
  )
};

export default VideoCard;
