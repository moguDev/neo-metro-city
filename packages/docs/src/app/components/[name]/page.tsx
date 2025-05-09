import ComponentPreviewer from "@/components/ComponentPreviewer";
import { ChevronRightIcon } from "@/components/svg-icons/icons";
import { componentsPreviewDatas } from "@/ui-previews";

type Props = {
  params: Promise<{ name: string }>;
};

const ComponentsPage = async ({ params }: Props) => {
  const { name } = await params;
  const data = componentsPreviewDatas.find((data) => data.name === name);

  return (
    <main className="pt-16 flex">
      <ul className="w-80 h-[95%] overflow-y-scroll p-5 mx-4 my-8 border-neon rounded-lg lg:block hidden">
        <li>
          <ul className="uppercase">
            <h2 className="text-lg text-neon-orange font-bold italic uppercase">
              Components
            </h2>
            {componentsPreviewDatas.map((data, idx) => (
              <li key={idx} className="group px-1 py-2 tracking-wide">
                <a
                  href={`/components/${data.name}`}
                  className="flex items-center justify-between hover:text-neon-orange hover:brightness-150 transition-all cursor-pointer"
                >
                  {data.name.replace("-", " ")}
                  <div className="neon-glow-soft -traslate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    <ChevronRightIcon size={4} />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <div className="my-8 max-w-4xl lg:mx-auto mx-[5%]">
        <div className="sticky top-0 flex items-center justify-between border-neon-b border-neon-orange px-1 py-4 z-40">
          <h1 className="text-2xl font-bold tracking-wider uppercase italic">
            {name.replace("-", " ")}
          </h1>
          <p className="italic font-bold">
            <span className="mr-1 text-xl">{data?.variants.length}</span>
            VARIANTS
          </p>
        </div>
        <p className="mt-4 leading-6 tracking-wider italic bg-cyber-dark px-4 py-6 rounded">
          {data?.description}
        </p>
        {name && <ComponentPreviewer name={name} />}
      </div>
    </main>
  );
};

export default ComponentsPage;
