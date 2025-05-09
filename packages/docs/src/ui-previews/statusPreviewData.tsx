import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const statusPreviewData: ComponentPreviewData = {
  name: "status",
  description:
    "Status indicators show real-time system conditions with glowing signals—pulsing like heartbeat LEDs wired into Neo Metro City's neural infrastructure.",
  variants: [
    {
      title: "Status",
      component: <span className="status" />,
      htmlStr: dedent(`<span className="status"></span>`),
      jsxStr: dedent(`<span className="status" />`),
    },
  ],
};

export default statusPreviewData;
