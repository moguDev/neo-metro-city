import { componentsData } from "@/components/ui-previews/componentsData";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

type componentPageProps = {
  params: {
    name: string;
  };
};
const componentPage: React.FC<componentPageProps> = ({ params }) => {
  const data = componentsData.find((data) => data.label === params.name);
  return (
    <div className="pt-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold tracking-wider">{data?.label}</h1>
      <p className="mt-4 leading-6 tracking-wider">{data?.description}</p>
      <div className="mt-4 text-shadow-none bg-cyber-dark rounded-md overflow-hidden">
        <SyntaxHighlighter
          language="jsx"
          style={nightOwl}
          customStyle={{
            backgroundColor: "transparent",
          }}
        >
          {"<div></div>"}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default componentPage;
