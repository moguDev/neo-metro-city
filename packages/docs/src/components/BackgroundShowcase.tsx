"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

const COMPONENTS = [
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
      <ul className="p-4 rounded border-neon-blue w-52">
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
      </ul>
    ),
  },
  // モーダル
  {
    label: "MODAL",
    component: (
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
      <ul className="list border-neon-blue bg-cyber-black w-96">
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
  },
  // Tabs
  {
    label: "Tabs",
    component: (
      <div role="tab" className="tabs">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
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
          name="neon-radio-showcase"
          className="neon-radio"
          defaultChecked
        />
        <input type="radio" name="neon-radio-showcase" className="neon-radio" />
      </div>
    ),
  },
  // Input field
  {
    label: "Input field",
    component: <input type="text" placeholder="Type here" className="input" />,
  },
  // Alert
  {
    label: "Alert",
    component: (
      <div
        role="alert"
        className="flex items-center gap-2 border-neon-blue rounded-2xl p-4 w-2xl"
      >
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
        <span className="italic w-full">THE FUTURE JUST ARRIVED!!</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-4"
          onClick={() => {
            document.querySelector("#neon-alert")?.classList.add("scale-0");
          }}
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
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
            filter="url(#glow)"
          />
        </svg>
      </div>
    ),
  },
];

type FloatingComponent = {
  id: string;
  component: ReactNode;
  top: number;
  left: number;
};

export default function BackgroundShowcase() {
  const [floatingComponents, setFloatingComponents] = useState<
    FloatingComponent[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newComponent =
        COMPONENTS[Math.floor(Math.random() * COMPONENTS.length)];

      const newFloatingComponent: FloatingComponent = {
        id: crypto.randomUUID(),
        component: newComponent.component,
        top: Math.random() * 90,
        left: Math.random() * 120 - 60,
      };
      setFloatingComponents((prev) => [...prev, newFloatingComponent]);

      setTimeout(() => {
        setFloatingComponents((prev) =>
          prev.filter((c) => c.id !== newFloatingComponent.id)
        );
      }, 5000);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-transparent z-0 pointer-events-none">
      <AnimatePresence>
        {floatingComponents.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3.5 }}
            className="absolute z-10"
            style={{
              top: `${item.top}%`,
              left: `${item.left}%`,
            }}
          >
            <div className="pointer-events-none w-max h-max blink">
              {item.component}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
