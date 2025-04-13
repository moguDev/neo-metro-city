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
    // チェックボックス
    {
      label: "CHECKBOX",
      component: (
        <label className="field-set font-bold">
          <input type="checkbox" className="neon-checkbox" defaultChecked />
          <span>CHECKBOX</span>
        </label>
      ),
    },
    // ラジオボタン
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
    // アコーディオン
    {
      label: "ACCORDION",
      component: (
        <div className="join w-fit scale-50 bg-cyber-black px-4 rounded">
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
    // Input field
    {
      label: "Input field",
      component: (
        <input type="text" placeholder="Type here" className="input" />
      ),
    },
  ];

  return (
    <section>
      <div className="py-4 neon-border-b-orange">
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
