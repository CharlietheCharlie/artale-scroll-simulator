"use client";

import useScrollStore from "@/store/useScrollStore";
import { ScrollResult } from "@/types/scroll";
import { useEffect, useRef, useState } from "react";

const ScrollingEffect = () => {
  const { history } = useScrollStore();
  const [effectSrc, setEffectSrc] = useState<string | null>(null);

  useEffect(() => {
    const result = history.at(-1)?.scrollResult ?? null;
    if (result) {
      const url = `/images/scroll-${result}.gif?t=${Date.now()}`;
      setEffectSrc(url);

      const audio = new Audio(`/sounds/scroll-${result}.mp3`);
      audio.play().catch(console.error);

      setTimeout(() => setEffectSrc(null), 700);
    }
  }, [history]);

  return (
    <div className="size-80 pointer-events-none relative">
      {effectSrc && (
        <img
          src={effectSrc}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="scrolling effect"
        />
      )}
    </div>
  );
};


export default ScrollingEffect;