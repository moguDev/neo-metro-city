import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const selectPreviewData: ComponentPreviewData = {
  name: "select",
  description:
    "Fieldsets group related inputs under a glowing perimeter, forming structured data clusters like access panels in the city’s control grid.",
  variants: [
    {
      title: "SELECT",
      component: (
        <select className="select">
          <option disabled selected>
            Pick a color
          </option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
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

export default selectPreviewData;
