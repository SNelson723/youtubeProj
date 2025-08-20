import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuOne, menuTwo } from ".";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="fixed top-[7vh] overflow-y-auto text-[15px] w-[215px]">
      <div className="border-b border-b-slate-50/40 pb-3">
        {menuOne.map((item) => (
          <div
            key={item.name}
            className="pl-4 py-3 cursor-pointer hover:bg-slate-500/50 transition-all duration-300 rounded-lg flex items-center gap-4"
          >
            <FontAwesomeIcon width={20} height={20} icon={item.icon} />
            {item.name}
          </div>
        ))}
      </div>
      <div className="border-b border-b-slate-50/40 pb-3">
        <div className="text-[17px] font-semibold pl-4 py-3 cursor-pointer hover:bg-slate-500/50 transition-all duration-300 rounded-lg flex items-center gap-4">
          You
          <FontAwesomeIcon className="pt-0.5" icon={faAngleRight} />
        </div>
        {menuTwo.map((item) => (
          <div
            key={item.name}
            className="pl-4 py-3 cursor-pointer hover:bg-slate-500/50 transition-all duration-300 rounded-lg flex items-center gap-4"
          >
            <FontAwesomeIcon icon={item.icon} />
            {item.name}
          </div>
        ))}
      </div>
      <div className="border-b border-b-slate-50/40 pb-3">
        <div className="text-[17px] font-semibold pl-4 py-3 cursor-pointer hover:bg-slate-500/50 transition-all duration-300 rounded-lg flex items-center gap-4">
          Subscriptions
          <FontAwesomeIcon className="pt-0.5" icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
