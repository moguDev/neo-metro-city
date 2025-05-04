import { ChevronRightIcon } from "./svg-icons/icons";
import { componentsPreviewDatas } from "../ui-previews";

const SideMenu = () => {
  return (
    <>
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-left">
        <label htmlFor="side-drawer" className="drawer-overlay" />
        <h1 className="drawer-head text-neon-orange tracking-widest">MENU</h1>
        <div className="drawer-content bg-transparent w-80">
          <ul className="">
            <li>
              <ul className="uppercase">
                <h2 className="text-lg text-neon-orange font-bold italic uppercase">
                  Components
                </h2>
                {componentsPreviewDatas.map((data, idx) => (
                  <li key={idx} className="group px-1 py-2 tracking-wide">
                    <a
                      href={`/components/${data.name}`}
                      className="flex items-center justify-between hover:text-neon-orange hover:brightness-150 transition-all cursor-pointer"
                    >
                      {data.name.replace("-", " ")}
                      <div className="neon-glow-soft -traslate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        <ChevronRightIcon size={4} />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
