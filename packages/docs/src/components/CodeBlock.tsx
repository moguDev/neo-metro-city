"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ClipboardIcon } from "./svg-icons/icons";

const CodeBlock = ({
  fileName,
  code,
  lang,
}: {
  fileName: string;
  code: string;
  lang: string;
}) => {
  const handleClickCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log("Success: Copy to clicpboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-cyber-dark border border-gray-800 font-mono rounded-lg md:text-base text-sm text-neon-none">
      <p className="text-xs opacity-50 translate-x-3 translate-y-2.5 italic select-none">
        {fileName}
      </p>
      <div className="flex items-center justify-betreen">
        <SyntaxHighlighter
          language={lang}
          style={atomDark}
          customStyle={{ backgroundColor: "transparent", width: "100%" }}
        >
          {code}
        </SyntaxHighlighter>
        <button className="btn" onClick={handleClickCopy}>
          <ClipboardIcon size={6} />
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
