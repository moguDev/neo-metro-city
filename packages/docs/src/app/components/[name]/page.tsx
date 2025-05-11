import ComponentPreviewer from "@/components/ComponentPreviewer";
import PagesWrapper from "@/components/PagesWrapper";
import { componentsPreviewDatas } from "@/ui-previews";

type Props = {
  params: Promise<{ name: string }>;
};

const ComponentsPage = async ({ params }: Props) => {
  const { name } = await params;
  const data = componentsPreviewDatas.find((data) => data.name === name);

  return (
    <PagesWrapper>
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
    </PagesWrapper>
  );
};

export default ComponentsPage;
