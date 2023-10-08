import React from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import useGetMensSection from "../Hooks/useGetMensSection";

const Body = () => {
  useGetMensSection();
  return (
    <>
      <Header />
      <MainComponent />
      <SecondaryComponent/>
    </>
  );
};

export default Body;
