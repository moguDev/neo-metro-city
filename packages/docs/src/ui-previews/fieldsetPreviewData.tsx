import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const filedsetPreviewData: ComponentPreviewData = {
  name: "field-set",
  description:
    "Fieldsets group related inputs under a glowing perimeter, forming structured data clusters like access panels in the city’s control grid.",
  variants: [
    {
      title: "Fieldset",
      component: (
        <fieldset className="fieldset w-96">
          <legend className="fieldset-legend text-neon-yellow tracking-widest">
            ACCESS LABEL
          </legend>
          <input type="text" className="input" placeholder="UNTITLED SECTOR" />
          <p className="label">
            This label can be updated from system preferences.
          </p>
        </fieldset>
      ),
      htmlStr: dedent(``),
      jsxStr: dedent(`
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            ACCESS LABEL
          </legend>
          <input type="text" className="input" placeholder="UNTITLED SECTOR" />
          <p className="label">
            This label can be updated from system preferences.
          </p>
        </fieldset>`),
    },
  ],
};

export default filedsetPreviewData;
