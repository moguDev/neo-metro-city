"use client";

import { useState } from "react";
import HashAnchor from "./HashAnchor";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import clsx from "clsx";
import dedent from "dedent";
import {
  ClipboardIcon,
  DjangoIcon,
  LaravelIcon,
  NPMIcon,
  PNPMIcon,
  RailsIcon,
  ReactIcon,
  ViteIcon,
  VueIcon,
  YarnIcon,
} from "./svg-icons/icons";
import { frame } from "framer-motion";

const FRAMEWORKS = [
  { icon: <ViteIcon size={16} />, name: "Vite", id: "vite" },
  { icon: <ReactIcon size={16} />, name: "React", id: "react" },
  { icon: <VueIcon size={16} />, name: "Vue", id: "vue" },
  { icon: <RailsIcon size={16} />, name: "Ruby on Rails", id: "ruby-on-rails" },
  { icon: <LaravelIcon size={16} />, name: "Laravel", id: "laravel" },
  { icon: <DjangoIcon size={16} />, name: "django", id: "django" },
];

const HowToInstallSection = () => {
  const [selectedTab, setSelectedTab] = useState<string>("npm");
  const instllationCmd = () => {
    switch (selectedTab) {
      case "npm":
        return "npm i -D neo-metro-city@latest";
      case "pnpm":
        return "pnpm add -D neo-metro-city@latest";
      case "yarn":
        return "yarn add -D neo-metro-city@latest";
      default:
        return "npm i neo-metro-city@latest";
    }
  };
  const handleClickCopy = () => {
    navigator.clipboard
      .writeText(instllationCmd())
      .then(() => {
        console.log("Success: Copy to clicpboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const stepTextCls = clsx("italic", "tracking-wider");
  return (
    <section className="py-4 md:text-base text-sm" id="how-to-install">
      <div className="sticky top-0 left-0 right-0 neon-border-b-orange py-4 z-40">
        <h2 className="text-xl font-bold inline italic tracking-wider">
          <HashAnchor id="#how-to-install" />
          HOW TO INSTALL
        </h2>
      </div>
      <div className="mx-2 my-4 space-y-8">
        <p className={stepTextCls}>
          0. You need{" "}
          <a
            href="https://nodejs.org/en/download/"
            target="_blank"
            className="underline cursor-pointer font-semibold tracking-wider text-neon-green hover:blink transition-all"
          >
            Node.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/docs/installation/using-vite"
            target="_blank"
            className="underline cursor-pointer font-semibold tracking-wider text-neon-pink hover:blink transition-all"
          >
            Tailwind CSS
          </a>{" "}
          installed.
        </p>

        {/* Step 1 */}
        <div>
          <p className={stepTextCls}>
            1. Install{" "}
            <span className="font-semibold text-neon-orange underline tracking-wider blink">
              NEO MeTRO CITY
            </span>{" "}
            as a Node package
          </p>
          <div className="tabs px-4" role="tablist">
            <input
              type="radio"
              id="npm-tab"
              name="installation-tabs"
              checked={selectedTab === "npm"}
              onChange={() => setSelectedTab("npm")}
            />
            <label className="tab" role="tab" htmlFor="npm-tab">
              <NPMIcon size={14} />
              <span className="ml-1">npm</span>
            </label>
            <input
              type="radio"
              id="pnpm-tab"
              name="installation-tabs"
              checked={selectedTab === "pnpm"}
              onChange={() => setSelectedTab("pnpm")}
            />
            <label className="tab" role="tab" htmlFor="pnpm-tab">
              <PNPMIcon size={6} />
              <span className="ml-1">pnpm</span>
            </label>
            <input
              type="radio"
              id="yarn-tab"
              name="installation-tabs"
              checked={selectedTab === "yarn"}
              onChange={() => setSelectedTab("yarn")}
            />
            <label className="tab" role="tab" htmlFor="yarn-tab">
              <YarnIcon size={6} />
              <span className="ml-1">yarn</span>
            </label>
          </div>
          <div className="flex items-center justify-betreen bg-cyber-dark border border-gray-800 font-mono rounded-lg md:text-base text-sm text-neon-none">
            <SyntaxHighlighter
              language="shell"
              style={atomDark}
              customStyle={{ backgroundColor: "transparent", width: "100%" }}
            >
              {instllationCmd()}
            </SyntaxHighlighter>
            <button className="btn" onClick={handleClickCopy}>
              <ClipboardIcon size={6} />
            </button>
          </div>
        </div>
        {/* Step 2 */}
        <div>
          <p className={stepTextCls}>2. Sync Neo Metro City into Your App.</p>
          <div className="flex items-center justify-between bg-cyber-dark rounded-lg border border-gray-800 text-neon-none mt-2">
            <div className="relative">
              <p className="absolute top-1.5 left-4 italic text-sm text-gray-500 font-sans">
                app.css
              </p>
              <SyntaxHighlighter
                language="css"
                style={atomDark}
                customStyle={{
                  paddingTop: "24px",
                  backgroundColor: "transparent",
                  width: "100%",
                }}
              >
                {dedent(`
              @import "tailwindcss";
              @plugin "neo-metro-city";`)}
              </SyntaxHighlighter>
            </div>
            <button
              className="btn"
              onClick={() => {
                navigator.clipboard
                  .writeText(`@plugin "neo-metro-city";`)
                  .then(() => {
                    console.log("Success: Copy to clicpboard");
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }}
            >
              <ClipboardIcon size={6} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 neon-border-t neon-border-b py-8 relative">
        <h3 className="z-1 absolute -top-4 left-0 right-0 w-full text-sm font-bold flex items-center justify-center">
          <span className="tracking-widest text-neon-yellow uppercase italic w-fit font-bold px-4 py-1 border-neon-blue rounded-full bg-cyber-black">
            install tutorials for Frameworks
          </span>
        </h3>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {FRAMEWORKS.map((framework) => (
            <div className="bg-cyber-black hover:bg-cyber-dark rounded-md border-2 border-gray-800 hover:border-neon-orange hover:-translate-y-1 flex flex-col items-center justify-center p-4 cursor-pointer min-h-32 transition-all duration-500">
              {framework.icon}
              <p className="text-sm font-bold tracking-widest mt-4">
                {framework.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToInstallSection;
