import { faHome, faPlay, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp,
  faCirclePlay,
  faClock,
  faPlayCircle,
  faRectangleList,
} from "@fortawesome/free-regular-svg-icons";

export const menuOne = [
  { name: "Home", link: "/", icon: faHome },
  { name: "Shorts", link: "/shorts", icon: faPlay },
  { name: "Subscriptions", link: "/subs", icon: faCirclePlay },
];

export const menuTwo = [
  { name: "History", link: "/contact", icon: faClock },
  { name: "Playlists", link: "/playlists", icon: faBoxOpen },
  { name: "Your videos", link: "/videos", icon: faPlayCircle },
  { name: "Your movies & TV", link: "/movies", icon: faRectangleList },
  { name: "Watch later", link: "/watch", icon: faClock },
  { name: "Liked Videos", link: "/liked", icon: faThumbsUp },
];
