import React from "react";
import Header from "../Header/index";

const index = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default index;
