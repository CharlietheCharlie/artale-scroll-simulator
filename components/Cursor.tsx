"use client";
import React, { useEffect, useRef, useState } from "react";

function isHoveringTarget(target: EventTarget | null): boolean {
  return target instanceof Element && !!target.closest(".hover-target");
}

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const nowHovering = el && isHoveringTarget(el);

      if (nowHovering !== hoveredRef.current) {
        hoveredRef.current = !!nowHovering;
        setIsHovering(!!nowHovering);
        if (nowHovering) {
          new Audio("/sounds/mouse-hover.mp3").play();
        }
      }
    };

    const clickDown = (e: MouseEvent) => {
      setIsClicking(true);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el && isHoveringTarget(el)) {
        new Audio("/sounds/mouse-click.mp3").play();
      }
    };

    const clickUp = () => setIsClicking(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", clickDown);
    document.addEventListener("mouseup", clickUp);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", clickDown);
      document.removeEventListener("mouseup", clickUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="pointer-events-none fixed z-[9999] w-10 h-10 -translate-x-1/2 -translate-y-1/2"
      style={{
        backgroundImage: `url(${
          isClicking
            ? isHovering
              ? "/images/cursor-hover-click.png"
              : "/images/cursor-normal-click.png"
            : isHovering
            ? "/images/cursor-hover.png"
            : "/images/cursor-normal.png"
        })`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Cursor;
