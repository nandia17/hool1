import React from "react";
import styl from "./style.module.css";
const CurrentFood = (props) => {
  return (
    <div className={styl.foode}>
      <span>
        <h1>{props.ner}</h1>
        <p>{props.price}</p>
      </span>
      <img src={props.ImgUrl} alt="food photo" width="40%" height="100px"></img>
    </div>
  );
};
export default CurrentFood;
//    current food const ruu hooloo oruulsan