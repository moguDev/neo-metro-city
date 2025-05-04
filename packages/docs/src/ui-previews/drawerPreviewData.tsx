import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const drawerPreviewData: ComponentPreviewData = {
  name: "drawer",
  description:
    "Side drawers slide from the edge to reveal hidden navigation panels, like secret alleys opening in Neo Metro City.",
  variants: [
    {
      title: "Drawer-Left, with TITLE",
      component: (
        <>
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <label htmlFor="my-drawer" className="btn uppercase">
            Open drawer
          </label>
          <div className="drawer-left">
            <label htmlFor="my-drawer" className="drawer-overlay" />
            <p className="drawer-head text-neon-orange tracking-widest">
              SIDE DRAWER
            </p>
            <div className="drawer-content w-80">
              <div className="italic uppercase flex items-center justify-center h-full">
                drawer content here
              </div>
            </div>
          </div>
        </>
      ),
      htmlStr: dedent(`
        <input id="my-drawer" type="checkbox" class="drawer-toggle">
        <label for="my-drawer" class="btn">OPEN DRAWER</label>
        <div class="drawer-left">
          <label for="my-drawer" class="drawer-overlay"></label>
          <p class="drawer-head text-neon-orange tracking-widest">
            SIDE DRAWER
          </p>
          <div class="drawer-content w-80">
            <div class="italic flex items-center justify-center h-full">
              <!-- DRAWER CONTENT HERE -->
            </div>
          </div>
        </div>`),
      jsxStr: dedent(`
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-drawer" className="btn">OPEN DRAWER</label>
        <div className="drawer-left">
          <label htmlFor="my-drawer" className="drawer-overlay" />
          <p className="drawer-head text-neon-orange tracking-widest">
            SIDE DRAWER
          </p>
          <div className="drawer-content w-80">
            <div className="italic flex items-center justify-center h-full">
              {/* DRAWER CONTENT HERE */}
            </div>
          </div>
        </div>
      `),
    },
  ],
};

export default drawerPreviewData;
