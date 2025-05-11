import { ReactNode } from "react";
import SideMenu from "./SideMenu";

const PagesWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main className="pt-16 flex">
      <SideMenu className="w-80 h-[90vh] overflow-y-scroll p-5 mx-4 my-6 border-neon rounded-lg lg:block hidden" />
      <div className="my-8 max-w-4xl mx-auto md:px-0 px-4 w-full">
        {children}
      </div>
    </main>
  );
};

export default PagesWrapper;
