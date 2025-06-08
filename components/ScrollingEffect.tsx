"use client";
import { useEffect, useState } from "react";
import useScrollStore from "@/store/useScrollStore";
import { ScrollResult } from "@/types/scroll";

type OmitDestroyed = Exclude<ScrollResult, "destroyed">;
const preloadImages: Record<OmitDestroyed, string> = {
  "success": "/images/scroll-success.gif",
  "failed": "/images/scroll-failed.gif",
};

const ScrollingEffect = () => {
  const { history } = useScrollStore();
  const [effectKey, setEffectKey] = useState(0);
  const [currentResult, setCurrentResult] = useState<OmitDestroyed | null>(null);

  useEffect(() => {
    const scrollResult = history.at(-1)?.scrollResult;
    const result: OmitDestroyed = scrollResult === "success" ? "success" : "failed";
    if (scrollResult) {
      setCurrentResult(result);
      setEffectKey(Date.now()); // force re-render
      new Audio(`/sounds/scroll-${result}.mp3`).play().catch(console.error);

      setTimeout(() => setCurrentResult(null), 700);
    }
  }, [history]);

  return (
    <div className="size-80 pointer-events-none relative">
      {/* hidden preload images */}
      <div className="hidden">
        <img src={preloadImages.success} />
        <img src={preloadImages.failed} />
      </div>

      {currentResult && (
        <img
          key={effectKey}
          src={preloadImages[currentResult]}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="scroll effect"
        />
      )}
    </div>
  );
};

export default ScrollingEffect;
