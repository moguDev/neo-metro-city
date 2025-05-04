import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const radioPreviewData: ComponentPreviewData = {
  name: "radio",
  description:
    "Radio buttons allow users to pick one option from a set, perfect for making singular decisions with futuristic flair.",
  variants: [
    {
      title: "Radio",
      component: (
        <div className="flex items-center gap-2 p-1">
          <input
            type="radio"
            name="neon-radio"
            className="neon-radio"
            defaultChecked
          />
          <input type="radio" name="neon-radio" className="neon-radio" />
        </div>
      ),
      htmlStr: dedent(`
        <input type="radio" name="neon-radio" class="neon-radio" checked>
        <input type="radio" name="neon-radio" class="neon-radio">`),
      jsxStr: dedent(`
        <input type="radio" name="neon-radio" className="neon-radio" defaultChecked />
        <input type="radio" name="neon-radio" className="neon-radio" />`),
    },
  ],
};

export default radioPreviewData;
