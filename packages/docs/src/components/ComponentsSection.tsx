"use client";
import HashAnchor from "./HashAnchor";

const ComponentsSection = () => {
  const components = [
    // ボタン
    {
      label: "BUTTON",
      component: <button className="btn border-neon-blue">BUTTON</button>,
    },
    // スワップ
    {
      label: "SWAP",
      component: (
        <label className="swap">
          <input type="checkbox" />
          <div className="swap-on">ON</div>
          <div className="swap-off">OFF</div>
        </label>
      ),
    },
    // ドロップダウン
    {
      label: "DROPDOWN",
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
    },
    // モーダル
    {
      label: "MODAL",
      component: (
        <>
          <button
            className="btn uppercase"
            onClick={() =>
              (
                document.querySelector("#neon_modal_1") as HTMLDialogElement
              )?.showModal()
            }
          >
            open modal
          </button>
          <dialog id="neon_modal_1" className="modal">
            <div className="modal-box text-neon-blue border-neon-blue">
              <h3 className="modal-head text-xl font-bold" data-neon-blink-text>
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
    },
    // Accordion
    {
      label: "ACCORDION",
      component: (
        <div className="join scale-50 bg-cyber-black px-4 rounded">
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
    },
    // List
    {
      label: "LIST",
      component: (
        <div className="list border-neon-blue scale-75 bg-cyber-black">
          <div className="list-title border-neon-blue rounded-full">
            <span className="font-bold">LIST TITLE</span>
          </div>
          <div className="list-row">
            <span className="italic">LIST ITEM 01</span>
          </div>
          <div className="list-row">
            <span className="italic">LIST ITEM 02</span>
          </div>
          <div className="list-row">
            <span className="italic">LIST ITEM 03</span>
          </div>
        </div>
      ),
    },
    // Checkbox
    {
      label: "CHECKBOX",
      component: (
        <label className="field-set font-bold">
          <input type="checkbox" className="neon-checkbox" defaultChecked />
          <span>CHECKBOX</span>
        </label>
      ),
    },
    // Radio
    {
      label: "RADIO",
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
    },
    // Input field
    {
      label: "Input field",
      component: (
        <input type="text" placeholder="Type here" className="input" />
      ),
    },
    // Alert
    {
      label: "Alert",
      component: (
        <>
          <button
            className="btn"
            onClick={() => {
              document
                .querySelector("#neon-alert")
                ?.classList.remove("scale-0");
            }}
          >
            SHOW ALERT
          </button>
          <div role="alert" className="alert scale-0 w-[95%]" id="neon-alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 overflow-visible"
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
            <button
              className="btn text-neon-orange"
              onClick={() => {
                document.querySelector("#neon-alert")?.classList.add("scale-0");
              }}
            >
              OK
            </button>
          </div>
        </>
      ),
    },
    //
  ];

  return (
    <section>
      <div className="bg-cyber-black sticky top-0 left-0 right-0 py-4 neon-border-b-orange z-50">
        <h2 className="text-xl font-bold italic uppercase tracking-wider">
          <HashAnchor id="components" />
          <span className="mr-1 text-2xl text-neon-yellow neon-glow-soft">
            {components.length}
          </span>
          Components
        </h2>
      </div>
      <div className="my-4 grid md:grid-cols-3 grid-cols-1">
        {components.map((c, i) => (
          <div key={i} className="p-1">
            <div className="bg-cyber-dark rounded-lg">
              <div className="h-52 flex items-center justify-center">
                {c.component}
              </div>
              <p className="font-semibold text-sm p-2">{c.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComponentsSection;
