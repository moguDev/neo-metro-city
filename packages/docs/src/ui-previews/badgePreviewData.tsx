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
    {
      title: "Badge colors",
      component: (
        <div className="flex flex-wrap gap-4">
          <span className="badge">NEUTRAL</span>
          <span className="badge badge-orange">ORANGE</span>
          <span className="badge badge-pink">PINK</span>
          <span className="badge badge-green">GREEN</span>
          <span className="badge badge-red">RED</span>
          <span className="badge badge-yellow">YELLOW</span>
        </div>
      ),
      htmlStr: dedent(`
        <div className="flex flex-wrap gap-4">
          <span className="badge">NEUTRAL</span>
          <span className="badge badge-orange">ORANGE</span>
          <span className="badge badge-pink">PINK</span>
          <span className="badge badge-green">GREEN</span>
          <span className="badge badge-red">RED</span>
          <span className="badge badge-yellow">YELLOW</span>
        </div>`),
      jsxStr: dedent(`
        <div className="flex flex-wrap gap-4">
          <span className="badge">NEUTRAL</span>
          <span className="badge badge-orange">ORANGE</span>
          <span className="badge badge-pink">PINK</span>
          <span className="badge badge-green">GREEN</span>
          <span className="badge badge-red">RED</span>
          <span className="badge badge-yellow">YELLOW</span>
        </div>`),
    },
  ],
};

export default badgePreviewData;
