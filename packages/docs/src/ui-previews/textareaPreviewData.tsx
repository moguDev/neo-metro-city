import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const textareaPreviewData: ComponentPreviewData = {
  name: "textarea",
  description:
    "Textareas allow users to input longer messages or logs, styled like streaming data into a glowing terminal deep within the city's core network.",
  variants: [
    {
      title: "Textarea",
      component: (
        <textarea
          className="textarea w-xl"
          placeholder="Enter your encrypted message..."
        />
      ),
      htmlStr: dedent(
        `<textarea class="textarea" placeholder="Enter your encrypted message..."></textarea>`
      ),
      jsxStr: dedent(
        `<textarea className="textarea" placeholder="Enter your encrypted message..." />`
      ),
    },
  ],
};

export default textareaPreviewData;
