import { componentsPreviewDatas } from "@/ui-previews";
import { ChevronRightIcon } from "./svg-icons/icons";
import clsx from "clsx";

const SideMenuItem = ({
  key,
  href,
  label,
}: {
  key?: any;
  href: string;
  label: string;
}) => {
  const liClasses = clsx("group", "px-1", "py-2", "tracking-wider", "text-sm");
  return (
    <li key={key ?? ""} className={liClasses}>
      <a
        href={href}
        className="flex items-center justify-between hover:text-neon-orange hover:brightness-150 transition-all cursor-pointer"
      >
        {label}
        <div className="neon-glow-soft -traslate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
          <ChevronRightIcon size={4} />
        </div>
      </a>
    </li>
  );
};

const SideMenu = ({ className = "" }: { className?: string | undefined }) => {
  return (
    <ul className={className}>
      <li className="pb-4">
        <ul className="uppercase">
          <h2 className="text-lg text-neon-orange font-bold italic uppercase">
            Docs
          </h2>
          <SideMenuItem href="/docs/introduction" label="Introduction" />
          <SideMenuItem href="/docs/install" label="Install" />
        </ul>
      </li>
      <li>
        <ul className="uppercase">
          <h2 className="text-lg text-neon-orange font-bold italic uppercase">
            Components
          </h2>
          {componentsPreviewDatas.map((data, idx) => (
            <SideMenuItem
              key={idx}
              href={`/components/${data.name}`}
              label={data.name.replace("-", " ")}
            />
          ))}
        </ul>
      </li>
    </ul>
  );
};
export default SideMenu;
