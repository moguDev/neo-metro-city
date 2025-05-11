import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden h-fit mt-32 p-5 select-none border-t border-gray-900 bg-cyber-black">
      <div className="max-w-7xl mx-auto flex flex-col md:items-start items-center">
        <Image
          src="/logo_neometrolabs.webp"
          alt="logo"
          width={160}
          height={80}
        />
        <p className="text-xs p-1 italic font-medium neon-glow-soft tracking-widest">
          Maintananced by Neo Metro Labs and Contributors.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
