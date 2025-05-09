import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const loadingPreviewData: ComponentPreviewData = {
  name: "loading",
  description:
    "Loading indicators visualize background processes, styled like pulsing signals on a neon console during a MetroNet uplink.",
  variants: [
    {
      title: "Loading dots",
      component: (
        <div className="loading">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      ),
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

export default loadingPreviewData;
