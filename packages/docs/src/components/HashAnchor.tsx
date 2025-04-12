"use client";

import { useCallback, useRef } from "react";

const HashAnchor: React.FC<{ id: string }> = ({ id }) => {
  const anchorRef = useRef<HTMLSpanElement>(null);

  const handleClick = useCallback(() => {
    if (anchorRef.current) {
      anchorRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  }, [id]);

  return (
    <span
      ref={anchorRef}
      onClick={handleClick}
      className="font-bold turnoff hover:turnon cursor-pointer transition duration-700 inline h-full mr-2"
      role="link"
      aria-label="Jump to this section"
    >
      #
    </span>
  );
};

export default HashAnchor;
