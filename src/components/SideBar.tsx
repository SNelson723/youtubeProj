
const menuOne = [
  { name: 'Home', link: '/' },
  { name: 'Shorts', link: '/shorts' },
  { name: 'Subscriptions', link: '/subs' },
];

const menuTwo = [
  { name: 'History', link: '/contact' },
  { name: 'Playlists', link: '/playlists' },
  { name: 'Your videos', link: '/videos' },
  { name: 'Your movies & TV', link: '/movies' },
  { name: 'Watch later', link: '/watch' },
  { name: 'Liked Videos', link: '/liked' },
];

const SideBar = () => {

  return (
    <div className="w-[10%] overflow-y-auto font-semibold text-[14p6]">
      {menuOne.map((item) => (
        <div
          key={item.name}
          className="pl-4 py-2 cursor-pointer hover:bg-slate-500/50 transition-all duration-300 rounded-lg"
        >
          {item.name}
        </div>
      ))}
      <div className="bg-slate-50/50 w-full h-[1px]"></div>
      {menuTwo.map((item) => (
        <div
          key={item.name}
          className="pl-4 py-2 cursor-pointer hover:bg-slate-500/50 transition-all duration-300 rounded-lg"
        >
          {item.name}
        </div>
      ))}
      <div className="bg-slate-50/50 w-full h-[1px]"></div>
    </div>
  );
};

export default SideBar;