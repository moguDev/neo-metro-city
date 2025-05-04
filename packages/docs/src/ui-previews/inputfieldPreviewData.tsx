import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const inputfieldPreviewData: ComponentPreviewData = {
  name: "input-field",
  description:
    "Input fields capture user input efficiently, styled like entering commands into a glowing console.",
  variants: [
    {
      title: "Input field",
      component: (
        <input type="text" placeholder="Type here" className="input" />
      ),
      htmlStr: dedent(
        `<input type="text" placeholder="Type here" class="input" >`
      ),
      jsxStr: dedent(
        `<input type="text" placeholder="Type here" className="input" />`
      ),
    },
  ],
};

export default inputfieldPreviewData;
