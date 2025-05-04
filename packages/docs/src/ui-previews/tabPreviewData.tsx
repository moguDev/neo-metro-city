import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const tabPreviewData: ComponentPreviewData = {
  name: "tab",
  description:
    "Tabs separate content into panels, like different levels of a neon skyscraper, letting users move between them easily.",
  variants: [
    {
      title: "Tabs",
      component: (
        <div className="tabs" role="tablist">
          <input type="radio" id="tab1" name="tabs" defaultChecked />
          <label className="tab" role="tab" htmlFor="tab1">
            Tab 1
          </label>
          <input type="radio" id="tab2" name="tabs" />
          <label className="tab" role="tab" htmlFor="tab2">
            Tab 2
          </label>
          <input type="radio" id="tab3" name="tabs" />
          <label className="tab" role="tab" htmlFor="tab3">
            Tab 3
          </label>
        </div>
      ),
      htmlStr: dedent(`
          <div class="tabs" role="tablist">
            <input type="radio" id="tab1" name="tabs" checked>
            <label class="tab" role="tab" for="tab1">Tab 1</label>

            <input type="radio" id="tab2" name="tabs" />
            <label class="tab" role="tab" for="tab2">Tab 2</label>

            <input type="radio" id="tab3" name="tabs" />
            <label class="tab" role="tab" for="tab3">Tab 3</label>
          </div>`),
      jsxStr: dedent(`
          <div className="tabs" role="tablist">
            <input type="radio" id="tab1" name="tabs" defaultChecked />
            <label className="tab" role="tab" htmlFor="tab1">
              Tab 1
            </label>
            <input type="radio" id="tab2" name="tabs" />
            <label className="tab" role="tab" htmlFor="tab2">
              Tab 2
            </label>
            <input type="radio" id="tab3" name="tabs" />
            <label className="tab" role="tab" htmlFor="tab3">
              Tab 3
            </label>
          </div>`),
    },
  ],
};

export default tabPreviewData;
