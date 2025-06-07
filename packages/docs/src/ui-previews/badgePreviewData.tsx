import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const badgePreviewData: ComponentPreviewData = {
  name: "badge",
  description:
    "Badges display system statuses or classifications, glowing like security tags or access codes pulsing within Neo Metro City's digital grid.",
  variants: [
    {
      title: "Badge",
      component: <span className="badge">BADGE</span>,
      htmlStr: dedent(`<span className="badge">BADGE</span>`),
      jsxStr: dedent(`<span className="badge">BADGE</span>`),
    },
  ],
};

export default badgePreviewData;
