import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const checkboxPreviewData: ComponentPreviewData = {
  name: "checkbox",
  description:
    "Checkboxes allow users to select options, toggling features on and off like activating systems on a neon dashboard.",
  variants: [
    {
      title: "Checkbox",
      component: (
        <label className="field-set font-bold">
          <input type="checkbox" className="neon-checkbox" defaultChecked />
          <span>CHECKBOX</span>
        </label>
      ),
      htmlStr: dedent(`
        <label class="field-set font-bold">
          <input type="checkbox" class="neon-checkbox" checked>
          <span>CHECKBOX</span>
        </label>
      `),
      jsxStr: dedent(`
        <label className="field-set font-bold">
          <input type="checkbox" className="neon-checkbox" defaultChecked />
          <span>CHECKBOX</span>
        </label>`),
    },
  ],
};

export default checkboxPreviewData;
