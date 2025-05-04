import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const listPreviewData: ComponentPreviewData = {
  name: "list",
  description:
    "Lists display items clearly and stylishly, like digital signboards showcasing important notices in Neo Metro City.",
  variants: [
    {
      title: "List-outlined with Title",
      component: (
        <ul className="list border-neon-blue">
          <div className="list-title border-neon-blue rounded-full">
            <span className="font-bold text-neon-yellow">LIST TITLE</span>
          </div>
          <li className="list-row">
            <span className="italic">LIST ITEM 01</span>
          </li>
          <li className="list-row">
            <span className="italic">LIST ITEM 02</span>
          </li>
          <li className="list-row">
            <span className="italic">LIST ITEM 03</span>
          </li>
        </ul>
      ),
      htmlStr: dedent(`
        <ul class="list border-neon-blue">
          <div class="list-title border-neon-blue rounded-full">
            <span class="font-bold text-neon-yellow">LIST TITLE</span>
          </div>
          <li class="list-row">
            <span class="italic">LIST ITEM 01</span>
          </li>
          <li class="list-row">
            <span class="italic">LIST ITEM 02</span>
          </li>
          <li class="list-row">
            <span class="italic">LIST ITEM 03</span>
          </li>
        </ul>`),
      jsxStr: dedent(`
        <ul className="list border-neon-blue">
          <div className="list-title border-neon-blue rounded-full">
            <span className="font-bold text-neon-yellow">LIST TITLE</span>
          </div>
          <li className="list-row">
            <span className="italic">LIST ITEM 01</span>
          </li>
          <li className="list-row">
            <span className="italic">LIST ITEM 02</span>
          </li>
          <li className="list-row">
            <span className="italic">LIST ITEM 03</span>
          </li>
        </ul>`),
    },
  ],
};

export default listPreviewData;
