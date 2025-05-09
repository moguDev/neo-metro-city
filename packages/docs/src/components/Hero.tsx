"use client";
import { useEffect, useState } from "react";

const TypingText = () => {
  const fullText =
    "Thhe most geeky UI Components & Effects Library for Tailwind CSS.";
  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) {
        clearInterval(typingInterval);
        setIsFinished(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <p className="md:text-xl text-[10px] font-medium my-4 tracking-widest border-neon-t border-neon-b md:w-2xl w-80 text-center md:p-4 p-3">
      {displayedText.includes("Tailwind CSS.") ? (
        <>
          {displayedText.split("Tailwind CSS.")[0]}
          <span className="text-neon-orange tracking-widest font-semibold">
            Tailwind CSS.
          </span>
        </>
      ) : (
        displayedText
      )}
      <span className={isFinished ? "inline-block animate-blink" : ""}>_</span>
    </p>
  );
};

const Hero = () => {
  return (
    <section className="w-full min-h-dvh mx-auto flex flex-col items-center justify-center select-none">
      <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-4xl font-medium py-2 tracking-wide neon-glow-soft brightness-200">
        NEO M<span className="blink text-neon-orange">e</span>TRO CITY
      </h1>
      <TypingText />
      <div className="flex items-center justify-center flex-wrap gap-4 p-4 my-4">
        <img src={"https://img.shields.io/npm/v/matsushita-ui?color=blue"} />
        <img src={"https://img.shields.io/npm/l/matsushita-ui.svg"} />
        <img src={"https://img.shields.io/npm/dt/matsushita-ui?color-red"} />
        <img
          src="https://img.shields.io/badge/contributions-welcome-orange.svg"
          alt="Contributions welcome"
        />
      </div>
      <div className="flex md:flex-row flex-col items-center mx-auto gap-8">
        <a
          href="#how-to-install"
          className="btn btn-outline hover:btn-orange w-80 font-bold uppercase tracking-widest"
        >
          Sync into the city
        </a>
        <p className="bg-cyber-dark px-4 py-2 tracking-widest rounded-lg select-text font-mono text-neon-none md:text-base text-sm">
          <span className="select-none mr-4 text-neon-yellow text-shadow-none">
            {">_"}
          </span>
          npm i neo-metro-city@latest
        </p>
      </div>
    </section>
  );
};

export default Hero;
