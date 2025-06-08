"use client";
import useScrollStore from "@/store/useScrollStore";
import { ScrollResult } from "@/types/scroll";
import React, { useEffect } from "react";

const ScrollingEffect = () => {
  const { history } = useScrollStore();

  useEffect(() => {
    function showEffect(result: ScrollResult) {
      const effectElement = document.getElementById("scrolling-effect");
      if (!effectElement) return;
      const effectImageUrl = `/images/scroll-${result}.gif`;
      effectElement.style.backgroundImage = `url(${effectImageUrl})`;

      setTimeout(() => {
        effectElement.style.backgroundImage = "none";
      }, 700);
    }
    function playSound(result: ScrollResult) {
      const soundUrl = `/sounds/scroll-${result}.mp3`;
      const audio = new Audio(soundUrl);
      audio.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }

    const result =
      history.length > 0 ? history[history.length - 1].scrollResult : null;
    if (result) {
      const useScrollResult = result === "success" ? "success" : "failed";
      showEffect(useScrollResult);
      playSound(useScrollResult);
    }
  }, [history]);

  return (
    <div
      id="scrolling-effect"
      className="size-80 bg-cover bg-no-repeat bg-center pointer-events-none transition-all duration-700 ease-in-out"
    ></div>
  );
};

export default ScrollingEffect;
