import { ModeToggle } from "@/components/ModeToggle";
import ScrollTypeSelector from "@/components/ScrollTypeSelector";
import React from "react";

const Home = (): React.ReactElement => {
  return (
    <div>
      <ModeToggle></ModeToggle>
      <ScrollTypeSelector></ScrollTypeSelector>
    </div>
  );
};

export default Home;
