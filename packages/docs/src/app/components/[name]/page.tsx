import ComponentPreviewer from "@/components/ComponentPreviewer";
import { componentsPreviewDatas } from "@/ui-previews";

type Props = {
  params: Promise<{ name: string }>;
};

const ComponentsPage = async ({ params }: Props) => {
  const { name } = await params;
  const data = componentsPreviewDatas.find((data) => data.name === name);

  return (
    <main className="pt-16 max-w-4xl md:mx-auto mx-[5%]">
      <div className="my-16">
        <h1 className="text-3xl font-bold tracking-wider uppercase italic neon-border-b-orange py-4">
          {name.replace("-", " ")}
        </h1>
        <p className="mt-4 leading-6 tracking-wider italic bg-cyber-dark px-4 py-6 rounded">
          {data?.description}
        </p>
        {name && <ComponentPreviewer name={name} />}
      </div>
    </main>
  );
};

export default ComponentsPage;
