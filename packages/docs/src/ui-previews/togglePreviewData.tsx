import { ComponentPreviewData } from "@/types";

const togglePreviewData: ComponentPreviewData = {
  name: "toggle",
  description:
    "Toggles switch a setting on and off, evoking the feeling of activating cybernetic implants.",
  variants: [
    {
      title: "Toggle",
      component: <input type="checkbox" className="toggle" />,
      htmlStr: `<input type="checkbox" class="toggle">`,
      jsxStr: `<input type="checkbox" className="toggle" />`,
    },
  ],
};

export default togglePreviewData;
