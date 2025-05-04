"use client";

import { ComponentVariant } from "@/types";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ClipboardIcon } from "@icons";
import HashAnchor from "./HashAnchor";
import { componentsPreviewDatas } from "../ui-previews";

const PreviewSection = ({
  variant,
  index,
}: {
  variant: ComponentVariant;
  index: number;
}) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const handleTabChange = (tabIndex: number) => setSelectedTab(tabIndex);

  const handleClickCopy = () => {
    navigator.clipboard
      .writeText(selectedTab === 2 ? variant.htmlStr : variant.jsxStr)
      .then(() => {
        console.log("Success: Copy to clicpboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section id={`variant-${index}`} className="w-full">
      <h2 className="text-2xl font-bold px-2">
        <HashAnchor id={`#variant-${index}`} />
        {variant.title}
      </h2>
      <div className="tabs relative mx-4 mt-2 z-1" role="tablist">
        <input
          type="radio"
          id={`tab-${index}-1`}
          name={`tabs-${index}`}
          checked={selectedTab === 1}
          onChange={() => handleTabChange(1)}
        />
        <label className="tab" role="tab" htmlFor={`tab-${index}-1`}>
          Preview
        </label>

        <input
          type="radio"
          id={`tab-${index}-2`}
          name={`tabs-${index}`}
          checked={selectedTab === 2}
          onChange={() => handleTabChange(2)}
        />
        <label className="tab" role="tab" htmlFor={`tab-${index}-2`}>
          HTML
        </label>

        <input
          type="radio"
          id={`tab-${index}-3`}
          name={`tabs-${index}`}
          checked={selectedTab === 3}
          onChange={() => handleTabChange(3)}
        />
        <label className="tab" role="tab" htmlFor={`tab-${index}-3`}>
          JSX
        </label>
      </div>

      <div
        className={`relative text-shadow-none border border-gray-800 p-4 rounded-2xl transition-all ${selectedTab === 1 ? "bg-cyber-black" : "bg-cyber-dark"}`}
      >
        {selectedTab === 1 && (
          <div className="flex items-center justify-center px-5 py-10 min-h-40 overflow-auto">
            {variant.component}
          </div>
        )}{" "}
        {selectedTab === 2 && (
          <div className="min-h-40 font-mono text-sm text-neon-none">
            <SyntaxHighlighter
              language="html"
              style={atomDark}
              customStyle={{ backgroundColor: "transparent" }}
            >
              {variant.htmlStr}
            </SyntaxHighlighter>
          </div>
        )}{" "}
        {selectedTab === 3 && (
          <div className="min-h-40 font-mono text-sm text-neon-none">
            <SyntaxHighlighter
              language="jsx"
              style={atomDark}
              customStyle={{ backgroundColor: "transparent" }}
            >
              {variant.jsxStr}
            </SyntaxHighlighter>
          </div>
        )}
        {selectedTab !== 1 && (
          <button
            className="btn absolute top-3 right-3"
            onClick={handleClickCopy}
          >
            <ClipboardIcon size={6} />
          </button>
        )}
      </div>
    </section>
  );
};

const ComponentPreviewer = ({ name }: { name: string }) => {
  const data = componentsPreviewDatas.find((data) => data.name === name);
  return (
    <div className="flex flex-col items-center gap-14 w-full mt-12">
      {data?.variants.map((variant, idx) => (
        <PreviewSection key={idx} variant={variant} index={idx} />
      ))}
    </div>
  );
};

export default ComponentPreviewer;
