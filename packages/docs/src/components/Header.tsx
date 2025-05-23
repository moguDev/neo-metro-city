"use client";
import Link from "next/link";

const Header = () => {
  const links = [
    { href: "\/#how-to-install", text: "Install" },
    { href: "\/#components", text: "Components" },
  ];
  return (
    <header className="absolute top-0 left-0 right-0 mx-2 h-16 border-neon-b border-neon-orange select-none z-50">
      <div className="flex items-center justify-between h-full p-2">
        <div className="flex items-center gap-2">
          <label htmlFor="side-drawer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-6 text-white cursor-pointer overflow-visible"
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                filter="url(#glow)"
              />
            </svg>
          </label>
          <Link href="/" className="flex items-center">
            <p className="text-xl font-semibold tracking-wide neon-glow-soft">
              NEO M<span className="text-neon-orange">e</span>TRO CITY
            </p>
            <p className="ml-1 text-shadow-none opacity-80 text-sm font-mono bg-cyber-dark px-2 py-1 rounded-lg">
              v0.1.0
            </p>
          </Link>
        </div>
        <ul className="hidden md:flex items-center">
          {links.map((li, i) => (
            <li key={i} className="btn font-bold tracking-wider uppercase">
              <a href={li.href}>#{li.text}</a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/moguDev/neo-metro-city"
              target="_blank"
              className="cursor-pointer shadow-xl shadow-white"
            >
              <svg
                className="h-6 fill-white overflow-visible"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter
                    id="glow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                  filter="url(#glow)"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
