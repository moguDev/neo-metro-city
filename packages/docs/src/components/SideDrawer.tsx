import SideMenu from "./SideMenu";

const SideDrawer = () => {
  return (
    <>
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-left">
        <label htmlFor="side-drawer" className="drawer-overlay" />
        <h1 className="drawer-head text-neon-orange tracking-widest">MENU</h1>
        <div className="drawer-content bg-transparent w-80">
          <SideMenu />
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
