import { componentsData } from "./ui-previews/componentsData";

const SideMenu = () => {
  return (
    <>
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-left">
        <label htmlFor="side-drawer" className="drawer-overlay" />
        <h1 className="drawer-head text-neon-orange tracking-widest">MENU</h1>
        <div className="drawer-content w-80">
          <ul className="">
            <li>
              <ul className="uppercase">
                <h2 className="text-lg text-neon-orange font-bold italic uppercase">
                  Components
                </h2>
                {componentsData.map((data, idx) => (
                  <li key={idx} className="p-1 tracking-wide">
                    <a
                      href={`/components/${data.label}`}
                      className=" hover:text-neon-orange hover:underline cursor-pointer"
                    >
                      {data.label}
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
