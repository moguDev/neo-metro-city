import { ComponentData } from "@/types/component";
import dedent from "dedent";

export const componentsData: ComponentData[] = [
  {
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
        component: (
          <button className="btn btn-outline w-96">WIDE BUTTON</button>
        ),
        htmlStr: `<button class="btn">BUTTON</button>`,
        jsxStr: `<button className="btn">BUTTON</button>`,
      },
    ],
  },
  {
    name: "swap",
    description:
      "Swap lets you toggle between two elements, like flipping a switch in the neon-lit streets of Neo Metro City—perfect for interactive states and quick visual changes.",
    variants: [
      {
        title: "Swap Text",
        component: (
          <label className="swap">
            <input type="checkbox" />
            <div className="swap-on">ON</div>
            <div className="swap-off">OFF</div>
          </label>
        ),
        htmlStr: dedent(`
          <label class="swap">
            <input type="checkbox">
            <div class="swap-on">ON</div>
            <div class="swap-off">OFF</div>
          </label>
        `),
        jsxStr: dedent(`
          <label className="swap">
            <input type="checkbox" />
            <div className="swap-on">ON</div>
            <div className="swap-off">OFF</div>
          </label>
        `),
      },
      {
        title: "Swap Volume Icons",
        component: (
          <label className="swap">
            <input type="checkbox" />
            <svg
              className="swap-on fill-none size-6 overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="var(--neon-orange)"
            >
              <defs>
                <filter
                  id="neonGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                filter="url(#neonGlow)"
              />
            </svg>
            <svg
              className="swap-off fill-none size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          </label>
        ),
        htmlStr: dedent(`
          <label class="swap">
            <input type="checkbox" />

            <!-- volume on icon -->
            <svg
              class="swap-on fill-none size-6 overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="var(--neon-orange)"
            >
              <defs>
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                filter="url(#neonGlow)"
              />
            </svg>

            <!-- volume off icon -->
            <svg
              class="swap-off fill-none size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          </label>
        `),
        jsxStr: dedent(`
          <label className="swap">
            <input type="checkbox" />

            {/* volume on icon */}
            <svg
              className="swap-on size-6 fill-none overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="var(--neon-orange)"
            >
              <defs>
                <filter
                  id="neonGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                filter="url(#neonGlow)"
              />
            </svg>
            
            {/* volume on icon */}
            <svg
              className="swap-off size-6 fill-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          </label>
        `),
      },
      {
        title: "Swap Lock Icons",
        component: (
          <label className="swap swap-noise">
            <input type="checkbox" />
            <svg
              className="swap-on size-6 fill-none overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="var(--neon-orange)"
            >
              <defs>
                <filter
                  id="neonGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                filter="url(#neonGlow)"
              />
            </svg>
            <svg
              className="swap-off size-6 fill-none "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </label>
        ),
        htmlStr: dedent(`
          <label class="swap">
            <input type="checkbox" />

            <!-- lock closed icon -->
            <svg
              class="swap-on size-6 fill-none overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="var(--neon-orange)"
            >
              <defs>
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                filter="url(#neonGlow)"
              />
            </svg>

            <!-- lock open icon -->
            <svg
              class="swap-off size-6 fill-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </label>
        `),
        jsxStr: dedent(`
          <label className="swap">
            <input type="checkbox" />

            {/* lock closed icon */}
            <svg
              className="swap-on size-6 fill-none overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="var(--neon-orange)"
            >
              <defs>
                <filter
                  id="neonGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                filter="url(#neonGlow)"
              />
            </svg>

            {/* lock open icon */}
            <svg
              className="swap-off size-6 fill-none "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </label>
        `),
      },
    ],
  },
  {
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
  },
  {
    name: "modal",
    description:
      "Modals are like neon popups in the cityscape, focusing user attention on a single task or message without leaving the current page.",
    variants: [
      {
        title: "Modal",
        component: (
          <>
            <button
              className="btn"
              onClick={() =>
                (
                  document.getElementById("neon_modal_1") as HTMLDialogElement
                ).showModal()
              }
            >
              OPEN MODAL
            </button>
            <dialog id="neon_modal_1" className="modal">
              <div className="modal-box text-neon-blue border-neon-blue">
                <h3
                  className="modal-head text-xl font-bold"
                  data-neon-blink-text
                >
                  This is Modal
                </h3>
                <p className="py-4">
                  Press ESC key or click the button below to close.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </>
        ),
        htmlStr: `...`,
        jsxStr: `...`,
      },
    ],
  },
  {
    name: "accordion",
    description:
      "Accordions organize content into expandable sections, like unfolding secret panels in a futuristic building.",
    variants: [
      {
        title: "Accordion",
        component: (
          <div className="join bg-cyber-black px-4 rounded">
            <div className="neon-accordion text-neon-blue neon-border-b">
              <input type="radio" name="neon-accordion" />
              <div className="neon-accordion-title text-neon-blue font-bold">
                ACCORDION FIRST ITEM
              </div>
              <div className="neon-accordion-content text-sm">
                Click the Sign Up button in the top right corner and follow the
                registration process.
              </div>
            </div>
            <div className="neon-accordion neon-border-b">
              <input type="radio" name="neon-accordion" />
              <div className="neon-accordion-title text-neon-orange font-bold">
                ACCORDION SECOND ITEM
              </div>
              <div className="neon-accordion-content text-sm">
                Click the Sign Up button in the top right corner and follow the
                registration process.
              </div>
            </div>
            <div className="neon-accordion text-neon-blue neon-border-b">
              <input type="radio" name="neon-accordion" />
              <div className="neon-accordion-title text-neon-pink font-bold">
                ACCORDION THIRD ITEM
              </div>
              <div className="neon-accordion-content text-sm">
                Click the Sign Up button in the top right corner and follow the
                registration process.
              </div>
            </div>
          </div>
        ),
        htmlStr: `...`,
        jsxStr: `...`,
      },
    ],
  },
  {
    name: "list",
    description:
      "Lists display items clearly and stylishly, like digital signboards showcasing important notices in Neo Metro City.",
    variants: [
      {
        title: "List",
        component: (
          <ul className="list border-neon-blue scale-75 bg-cyber-black">
            <div className="list-title border-neon-blue rounded-full">
              <span className="font-bold">LIST TITLE</span>
            </div>
            <li className="list-row">
              <span className="italic">LIST ITEM 01</span>
            </li>
            <li className="list-row">
              <span className="italic">LIST ITEM 02</span>
            </li>
            <li className="list-row">
              <span className="italic">LIST ITEM 03</span>
            </li>
          </ul>
        ),
        htmlStr: `...`,
        jsxStr: `...`,
      },
    ],
  },
  {
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
  },
  {
    name: "checkbox",
    description:
      "Checkboxes allow users to select options, toggling features on and off like activating systems on a neon dashboard.",
    variants: [
      {
        title: "Checkbox",
        component: (
          <label className="field-set font-bold">
            <input type="checkbox" className="neon-checkbox" defaultChecked />
            <span>CHECKBOX</span>
          </label>
        ),
        htmlStr: `...`,
        jsxStr: `...`,
      },
    ],
  },
  {
    name: "radio",
    description:
      "Radio buttons allow users to pick one option from a set, perfect for making singular decisions with futuristic flair.",
    variants: [
      {
        title: "Radio",
        component: (
          <div className="flex items-center gap-2 p-1">
            <input
              type="radio"
              name="neon-radio"
              className="neon-radio"
              defaultChecked
            />
            <input type="radio" name="neon-radio" className="neon-radio" />
          </div>
        ),
        htmlStr: `...`,
        jsxStr: `...`,
      },
    ],
  },
  {
    name: "input-field",
    description:
      "Input fields capture user input efficiently, styled like entering commands into a glowing console.",
    variants: [
      {
        title: "Input field",
        component: (
          <input type="text" placeholder="Type here" className="input" />
        ),
        htmlStr: `<input type="text" placeholder="Type here" class="input" />`,
        jsxStr: `<input type="text" placeholder="Type here" className="input" />`,
      },
    ],
  },
  {
    name: "alert",
    description:
      "Alerts grab user attention with important information, flashing like warning signals in the neon cityscape.",
    variants: [
      {
        title: "Alert",
        component: (
          <div role="alert" className="alert w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-6 overflow-visible"
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="#D2ECFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow)"
              />
            </svg>
            <span className="italic">THE FUTURE JUST ARRIVED!!</span>
          </div>
        ),
        htmlStr: `...`,
        jsxStr: dedent(`
          <div role="alert" className="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-6 overflow-visible"
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="#D2ECFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#glow)"
              />
            </svg>
            <span className="italic">THE FUTURE JUST ARRIVED!!</span>
          </div>`),
      },
    ],
  },
  {
    name: "toggle",
    description:
      "Toggles switch a setting on and off, evoking the feeling of activating cybernetic implants.",
    variants: [
      {
        title: "Toggle",
        component: <input type="checkbox" className="toggle" />,
        htmlStr: `<input type="checkbox" class="toggle">`,
        jsxStr: `<input type="checkbox" className="toggle" />`,
      },
    ],
  },
  {
    name: "drawer",
    description:
      "Side drawers slide from the edge to reveal hidden navigation panels, like secret alleys opening in Neo Metro City.",
    variants: [
      {
        title: "Drawer",
        component: (
          <>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <label htmlFor="my-drawer" className="btn uppercase">
              Open drawer
            </label>
            <div className="drawer-left">
              <label htmlFor="my-drawer" className="drawer-overlay" />
              <p className="drawer-head text-neon-orange tracking-widest">
                SIDE DRAWER
              </p>
              <div className="drawer-content w-80">
                <div className="italic uppercase flex items-center justify-center h-full">
                  drawer content here
                </div>
              </div>
            </div>
          </>
        ),
        htmlStr: `...`,
        jsxStr: `...`,
      },
    ],
  },
  {
    name: "progress",
    description:
      "Progress indicators visualize ongoing processes or statuses. In Neo Metro City, they pulse like neon veins running through the city, signaling progress with vibrant, rhythmic energy.",
    variants: [
      {
        title: "Progress",
        component: (
          <progress className="progress progress-orange" max="100" value="70" />
        ),
        htmlStr: "",
        jsxStr: dedent(`
          <progress className="progress progress-orange" max="100" value="70" />
        `),
      },
    ],
  },
];
