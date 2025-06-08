import { create } from "zustand";

import { IScrollLog, ScrollResult, ScrollType } from "@/types/scroll";

const scrollRates: Record<ScrollType, { success: number; destroyed: number }> =
  {
    10: { success: 0.1, destroyed: 0 },
    30: { success: 0.3, destroyed: 0.5 },
    60: { success: 0.6, destroyed: 0 },
  };

interface ScrollState {
  scrollType: ScrollType;
  successRate: number;
  destroyedRate: number;
  successStreak: number;
  failedStreak: number;
  history: IScrollLog[];

  setScrollType: (scrollType: ScrollType) => void;
  scrolling: () => ScrollResult;
  reset: () => void;
}

const useScrollStore = create<ScrollState>((set, get) => ({
  scrollType: 10,
  successRate: scrollRates[10].success,
  destroyedRate: scrollRates[10].destroyed,
  successStreak: 0,
  failedStreak: 0,

  failedStreakTarget: 0,

  history: [],

  setScrollType: (scrollType: ScrollType) => {
    set({
      scrollType: scrollType,
      successRate: scrollRates[scrollType].success,
      destroyedRate: scrollRates[scrollType].destroyed,
      successStreak: 0,
      failedStreak: 0,
    });
  },

  scrolling: () => {
    const {
      scrollType,
      successRate,
      destroyedRate,
      successStreak,
      failedStreak,
      history,
    } = get();
    const roll = Math.random();
    if (roll < successRate) {
      set({
        successStreak: successStreak + 1,
        failedStreak: 0,
        history: [
          ...history,
          { scrollType: scrollType, scrollResult: "success" },
        ],
      });
      return "success";
    } else {
      const isDestroyed = Math.random() < destroyedRate;
      set({ successStreak: 0, failedStreak: failedStreak + 1 });

      if (isDestroyed) {
        set({
          history: [
            ...history,
            { scrollType: scrollType, scrollResult: "destroyed" },
          ],
        });
        return "destroyed";
      } else {
        set({
          history: [
            ...history,
            { scrollType: scrollType, scrollResult: "failed" },
          ],
        });
        return "failed";
      }
    }
  },
  reset: () => {
    set({
      scrollType: 10,
      successRate: scrollRates[10].success,
      destroyedRate: scrollRates[10].destroyed,
      successStreak: 0,
      failedStreak: 0,
      history: [],
    });
  },
}));

export default useScrollStore;
