"use client";
import HashAnchor from "./HashAnchor";
import { componentsData } from "./ui-previews/componentsData";

const ComponentsSection = () => {
  return (
    <section id="components">
      <div className="bg-cyber-black sticky top-0 left-0 right-0 py-4 neon-border-b-orange z-40">
        <h2 className="text-xl font-bold italic uppercase tracking-wider">
          <HashAnchor id="#components" />
          <span className="mr-1 text-2xl text-neon-yellow neon-glow-soft">
            {componentsData.length}
          </span>
          Components
        </h2>
      </div>
      <div className="my-4 grid md:grid-cols-3 grid-cols-1">
        {componentsData.map((c, i) => (
          <div key={i} className="p-1">
            <div className="bg-cyber-dark rounded-lg">
              <div className="h-52 flex items-center justify-center">
                {c.component}
              </div>
              <p className="font-semibold text-sm p-2">{c.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentsSection;
