import React from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import useGetMensSection from "../Hooks/useGetMensSection";
import useGetWomenSection from "../Hooks/useGetWomenSection";
import usejewellerySection from "../Hooks/useJewellerySection";

const Body = () => {
  useGetMensSection();
  useGetWomenSection();
  usejewellerySection();
  return (
    <>
      <Header />
      <MainComponent />
      <SecondaryComponent/>
    </>
  );
};

export default Body;
