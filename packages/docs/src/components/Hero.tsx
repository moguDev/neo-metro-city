const Hero = () => {
  return (
    <section className="w-full min-h-dvh mx-auto flex flex-col items-center justify-center select-none">
      <h1 className="md:text-8xl text-4xl font-semibold italic py-2 tracking-wider neon-glow-soft">
        NEO M<span className="blink text-neon-orange">e</span>TRO CITY
      </h1>
      <p className="md:text-xl text-[10px] font-medium text-neon-green my-4 tracking-widest neon-border-t neon-border-b md:w-2xl w-80 text-center md:p-4 p-3">
        The most geeky UI Components & Effects Library for{" "}
        <span className="text-neon-orange tracking-widest font-semibold">
          Tailwind CSS.
        </span>
      </p>
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
        <button className="btn md:w-52 w-80 font-bold uppercase tracking-widest border-neon-blue hover:text-neon-orange hover:border-neon-orange">
          Get Started
        </button>
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
