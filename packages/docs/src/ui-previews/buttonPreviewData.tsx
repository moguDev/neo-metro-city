import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const buttonPreviewData: ComponentPreviewData = {
  name: "button",
  description:
    "Buttons let users perform actions in the interface. In Neo Metro City, they serve as clear and responsive elements designed for fast interactions.",
  variants: [
    {
      title: "Button",
      component: <button className="btn">BUTTON</button>,
      htmlStr: `<button class="btn">BUTTON</button>`,
      jsxStr: `<button className="btn">BUTTON</button>`,
    },
    {
      title: "Outlined Button",
      component: <button className="btn btn-outline">BUTTON</button>,
      htmlStr: `<button class="btn btn-outline">BUTTON</button>`,
      jsxStr: `<button className="btn btn-outline">BUTTON</button>`,
    },
    {
      title: "Button sizes",
      component: (
        <div className="flex items-center gap-4">
          <button className="btn btn-outline text-xs">Xsmall</button>
          <button className="btn btn-outline text-sm">Small</button>
          <button className="btn btn-outline text-md">Medium</button>
          <button className="btn btn-outline text-lg">Large</button>
          <button className="btn btn-outline text-xl">XLarge</button>
        </div>
      ),
      htmlStr: dedent(`
          <button class="btn btn-outline text-xs">Xsmall</button>
          <button class="btn btn-outline text-sm">Small</button>
          <button class="btn btn-outline text-md">Medium</button>
          <button class="btn btn-outline text-lg">Large</button>
          <button class="btn btn-outline text-xl">XLarge</button>
        `),
      jsxStr: dedent(`
          <button className="btn btn-outline text-xs">Xsmall</button>
          <button className="btn btn-outline text-sm">Small</button>
          <button className="btn btn-outline text-md">Medium</button>
          <button className="btn btn-outline text-lg">Large</button>
          <button className="btn btn-outline text-xl">XLarge</button>
        `),
    },
    {
      title: "Button colors",
      component: (
        <div className="flex items-center gap-4">
          <button className="btn btn-outline">NEUTRAL</button>
          <button className="btn btn-outline btn-orange">ORANGE</button>
          <button className="btn btn-outline btn-pink">PINK</button>
          <button className="btn btn-outline btn-green">GREEN</button>
          <button className="btn btn-outline btn-purple">PURPLE</button>
          <button className="btn btn-outline btn-yellow">YELLOW</button>
        </div>
      ),
      htmlStr: dedent(`
          <button class="btn btn-outline">NEUTRAL</button>
          <button class="btn btn-outline btn-orange">ORANGE</button>
          <button class="btn btn-outline btn-pink">PINK</button>
          <button class="btn btn-outline btn-green">GREEN</button>
          <button class="btn btn-outline btn-purple">PURPLE</button>
          <button class="btn btn-outline btn-yellow">YELLOW</button>
        `),
      jsxStr: dedent(`
          <button className="btn btn-outline">NEUTRAL</button>
          <button className="btn btn-outline btn-orange">ORANGE</button>
          <button className="btn btn-outline btn-pink">PINK</button>
          <button className="btn btn-outline btn-green">GREEN</button>
          <button className="btn btn-outline btn-purple">PURPLE</button>
          <button className="btn btn-outline btn-yellow">YELLOW</button>
        `),
    },
    {
      title: "Button wide",
      component: <button className="btn btn-outline w-96">WIDE BUTTON</button>,
      htmlStr: `<button class="btn">BUTTON</button>`,
      jsxStr: `<button className="btn">BUTTON</button>`,
    },
  ],
};

export default buttonPreviewData;
