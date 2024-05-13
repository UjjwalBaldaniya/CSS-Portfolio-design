import React from "react";
import Headers from "../components/homeSection/Headers";
import Middle from "../components/homeSection/Middle";
import Partner from "../components/homeSection/Partner";
import Team from "../components/homeSection/Team";

const Home = () => {
  return (
    <>
      <Headers />
      <Partner />
      <Middle />
      <Team />
    </>
  );
};

export default Home;
