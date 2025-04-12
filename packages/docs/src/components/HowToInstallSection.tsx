import HashAnchor from "./HashAnchor";

const HowToInstallSection = () => {
  return (
    <section className="py-4">
      <div className="neon-border-b-orange py-4">
        <h2 className="text-xl font-bold inline italic tracking-wider">
          <HashAnchor id="how-to-install" />
          HOW TO INSTALL
        </h2>
      </div>
      <div className="mx-2 my-4">
        <p>
          You need{" "}
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
        <div className="flex items-center gap-4 mt-4">
          <p className="font-semibold">
            <svg
              className="max-lg:hidden inline mr-1"
              width="14"
              height="14"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 256v-256h256v256z" fill="#c12127" />
              <path d="m48 48h160v160h-32v-128h-48v128h-80z" fill="#fff" />
            </svg>
            npm
          </p>
          <p className="font-semibold">
            <svg
              className="max-lg:hidden inline mr-1"
              width="14"
              height="14"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30,10.75H21.251V2H30Z" style={{ fill: "#f9ad00" }} />
              <path
                d="M20.374,10.75h-8.75V2h8.75Z"
                style={{ fill: "#f9ad00" }}
              />
              <path d="M10.749,10.75H2V2h8.749Z" style={{ fill: "#f9ad00" }} />
              <path
                d="M30,20.375H21.251v-8.75H30Z"
                style={{ fill: "#f9ad00" }}
              />
              <path d="M20.374,20.375h-8.75v-8.75h8.75Z" fill="currentColor" />
              <path d="M20.374,30h-8.75V21.25h8.75Z" fill="currentColor" />
              <path d="M30,30H21.251V21.25H30Z" fill="currentColor" />
              <path d="M10.749,30H2V21.25h8.749Z" fill="currentColor" />
            </svg>
            pnpm
          </p>
          <p className="font-semibold">
            <svg
              className="max-lg:hidden inline mr-1"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="#117cad"
                stroke="none"
              >
                <path d="M17.845 19.308c-1.268 .814 -2.41 1.254 -3.845 1.692c-.176 .21 -.645 .544 -.912 .588a42.469 42.469 0 0 1 -4.498 .412c-.812 .006 -1.31 -.214 -1.447 -.554c-.115 -.279 .336 -2.054 .298 -1.964c-.157 .392 -.575 1.287 -.997 1.72c-.579 .6 -1.674 .4 -2.322 .051c-.71 -.386 -.07 -1.28 -.346 -1.267c-.276 .014 -.776 -1.486 -.776 -2.236c0 -.828 .622 -1.674 1.235 -2.211a6.811 6.811 0 0 1 .46 -3.143a7.414 7.414 0 0 1 2.208 -2.615s-1.353 -1.534 -.849 -2.912c.328 -.902 .46 -.895 .567 -.935c.38 -.12 .727 -.33 1.013 -.612c.78 -.88 1.96 -1.438 3.116 -1.322c0 0 .781 -2.43 1.533 -1.936c.415 .653 .671 1.218 .967 1.936c0 0 1.15 -.7 1.25 -.5c.514 1.398 .487 3.204 .211 4.67c-.324 1.408 -.84 2.691 -1.711 3.83c-.094 .16 .98 .705 1.722 2.812c.686 1.928 .278 2.438 .278 2.688s.716 .144 2.296 -.855a5.848 5.848 0 0 1 2.984 -1.145c.735 -.066 .988 -.035 1.22 1c.232 1.035 -.346 1.406 -.744 1.506c0 0 -2.09 .675 -2.911 1.302z"></path>
              </g>
            </svg>
            yarn
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToInstallSection;
