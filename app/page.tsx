"use client";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import ScrollingButton from "@/components/ScrollingButton";
import ScrollingEffect from "@/components/ScrollingEffect";
import ScrollTypeSelector from "@/components/ScrollTypeSelector";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import React from "react";

const Home = (): React.ReactElement => {
  const { resolvedTheme: theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    console.log(theme);
    setMounted(true);
  }, []);

  return (
    <div>
      <div className="hover-target">
        <ModeToggle></ModeToggle>
      </div>
      <div className="flex justify-center">
        <Logo></Logo>
      </div>
      <div className="flex flex-col items-center gap-4">
        <ScrollTypeSelector></ScrollTypeSelector>
        <ScrollingButton></ScrollingButton>
      </div>
      <Separator className="my-5" />
      <div className="relative h-96 w-full">
        {/* 背景層 */}
        {mounted && <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-50"
          style={{
            backgroundImage:
              theme === "dark"
                ? "url('/images/bg-kerning-city.jpg')"
                : "url('/images/bg-henesys.jpg')",
          }}
        ></div>}

        {/* 內容層 */}
        <div className="relative flex justify-center h-full">
          <ScrollingEffect />
        </div>
      </div>
    </div>
  );
};

export default Home;
