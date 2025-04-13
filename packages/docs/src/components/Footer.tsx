"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden h-56 mt-32 p-6 select-none bg-cyber-dark z-40">
      <div className="flex md:flex-row flex-col items-center justify-between gap-4 h-full">
        <div className="my-auto">
          <p className="text-sm font-bold">Neo MeTRO Labs.</p>
          <div className="flex items-center gap-6 my-4">
            <div className="flex flex-col items-center gap-3 w-20">
              <Image
                src="/mogu.png"
                alt="mogu"
                className="rounded-[20px]"
                width={60}
                height={60}
              />
              <p className="text-sm font-bold">MOGU</p>
            </div>
            <div className="flex flex-col items-center gap-3 w-20">
              <Image
                src="/pote.jpg"
                alt="potatoman"
                className="rounded-[20px]"
                width={60}
                height={60}
              />
              <p className="text-sm font-bold">POTATOMAN</p>
            </div>
            <div className="flex flex-col items-center gap-3 w-20">
              <Image
                src="/matsushita.png"
                alt="matsushita"
                className="rounded-[20px]"
                width={60}
                height={60}
              />
              <p className="text-sm font-bold">MATSUSHITA</p>
            </div>
          </div>
        </div>
        <p className="tracking-wider md:text-sm text-xs">
          Maintananced by Neo MeTRO Labs and Contributors.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
