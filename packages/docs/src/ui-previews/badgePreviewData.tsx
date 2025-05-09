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
      htmlStr: dedent(
        `<textarea class="textarea" placeholder="Enter your encrypted message..."></textarea>`
      ),
      jsxStr: dedent(
        `<div className="loading">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>`
      ),
    },
  ],
};

export default badgePreviewData;
