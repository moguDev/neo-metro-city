import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const progressPreviewData: ComponentPreviewData = {
  name: "progress",
  description:
    "Progress indicators visualize ongoing processes or statuses. In Neo Metro City, they pulse like neon veins running through the city, signaling progress with vibrant, rhythmic energy.",
  variants: [
    {
      title: "Progress",
      component: (
        <progress className="progress progress-orange" max={100} value={70} />
      ),
      htmlStr: dedent(`
        <progress class="progress progress-orange" max="100" value="70">70%</progress>
      `),
      jsxStr: dedent(`
        <progress className="progress progress-orange" max={100} value={70} />
      `),
    },
  ],
};

export default progressPreviewData;
