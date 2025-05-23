"use client";
import Image from "next/image";
import HashAnchor from "./HashAnchor";
import { componentsPreviewDatas } from "../ui-previews";
import Link from "next/link";

const ComponentsSection = () => {
  return (
    <section id="components">
      <div className="sticky top-0 left-0 right-0 py-4 border-neon-b border-neon-orange z-40">
        <h2 className="text-xl font-bold italic uppercase tracking-wider">
          <HashAnchor id="#components" />
          <span className="mr-1 text-2xl text-neon-yellow neon-glow-soft">
            {componentsPreviewDatas.length}
          </span>
          Components
        </h2>
      </div>
      <div className="my-4 grid md:grid-cols-3 grid-cols-1 gap-2">
        {componentsPreviewDatas.map((previewData) => (
          <Link
            href={`/components/${previewData.name}`}
            key={previewData.name}
            className="group bg-cyber-black overflow-hidden rounded-lg p-4 border-2 hover:border-neon hover:border-neon-orange border-gray-800 hover:bg-cyber-dark hover:-translate-y-1 transition-all duration-500 cursor-pointer"
          >
            <Image
              className="rounded-lg"
              src={`/${previewData.name}_component.webp`}
              alt={`${previewData.name}_component`}
              width={800}
              height={418}
            />
            <div className="group-hover:text-neon-orange">
              <p className="uppercase font-bold text-inherit mt-2 tracking-wider">
                {previewData.name.replace("-", " ")}
              </p>
              <p className="text-xs mt-2 leading-5 tracking-wider italic group-hover:turnon turnoff transition-all">
                {previewData.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ComponentsSection;
