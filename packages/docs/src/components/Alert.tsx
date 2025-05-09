"use client";
import React from "react";
import clsx from "clsx";

interface AlertProps {
  message: string;
  type?: "success" | "warning" | "danger";
  duration?: number; // アニメ用に残してもOK
}

const Alert: React.FC<AlertProps> = ({ message, type = "warning" }) => {
  return (
    <div
      role="alert"
      className={clsx(
        "alert",
        `alert-${type}`,
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl px-6",
        "transition-all duration-300"
      )}
    >
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
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          stroke="var(--neon-text-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
        />
      </svg>
      <span className="uppercase tracking-widest font-medium italic">
        {message}
      </span>
    </div>
  );
};

export default Alert;
