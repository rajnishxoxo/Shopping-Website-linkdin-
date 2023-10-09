import React from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import useGetMensSection from "../Hooks/useGetMensSection";
import useGetWomenSection from "../Hooks/useGetWomenSection";

const Body = () => {
  useGetMensSection();
  useGetWomenSection()
  return (
    <>
      <Header />
      <MainComponent />
      <SecondaryComponent/>
    </>
  );
};

export default Body;
