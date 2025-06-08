import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import ScrollingButton from "@/components/ScrollingButton";
import ScrollingEffect from "@/components/ScrollingEffect";
import ScrollTypeSelector from "@/components/ScrollTypeSelector";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Home = (): React.ReactElement => {
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
      <Separator className="my-4" />
      <div className="flex justify-center">
        <ScrollingEffect></ScrollingEffect>
      </div>
    </div>
  );
};

export default Home;
