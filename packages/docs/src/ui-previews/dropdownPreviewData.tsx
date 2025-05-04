import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const dropdownPreviewData: ComponentPreviewData = {
  name: "dropdown",
  description:
    "Dropdowns reveal a list of options when activated, just like pulling a hidden neon panel from a high-tech wall in Neo Metro City.",
  variants: [
    {
      title: "Dropdown",
      component: (
        <div className="dropdown">
          <input type="checkbox" id="dropdown-toggle" />
          <label htmlFor="dropdown-toggle" className="font-bold">
            DROPDOWN
          </label>
          <ul className="dropdown-content border-neon-blue w-52">
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
          </ul>
        </div>
      ),
      htmlStr: dedent(`
          <div class="dropdown">
            <input type="checkbox" id="dropdown-toggle" />
            <label for="dropdown-toggle" class="font-bold">DROPDOWN</label>
            <ul class="dropdown-content border-neon-blue w-52">
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
            </ul>
          </div>`),
      jsxStr: dedent(`
          <div className="dropdown">
            <input type="checkbox" id="dropdown-toggle" />
            <label htmlFor="dropdown-toggle" className="font-bold">DROPDOWN</label>
            <ul className="dropdown-content border-neon-blue w-52">
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
            </ul>
          </div>`),
    },
  ],
};

export default dropdownPreviewData;
