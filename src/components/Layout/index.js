import React from "react";
import Header from "../Header/index";

const Index = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Index;
