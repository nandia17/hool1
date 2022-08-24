import React from "react";
import styl from "./style.module.css";

const CurrentFood = (props) => {
  console.log(props.shirheg);
  return (
    <div className={styl.foode}>
      <img
        src={props.ImgUrl}
        alt="food photo"
        width="100px"
        height="100px"
      ></img>
      <h3>{props.ner}</h3>
      <button onClick={() => props.hoolNemeh(props.shirheg[props.ner])}>
        +
      </button>
      <p>{props.shirheg[props.ner]}</p>
      <button onClick={() => props.hoolHasah(props.shirheg[props.ner])}>
        -
      </button>
      <h3>{props.price}</h3>
    </div>
  );
};
export default CurrentFood;
//    current food const ruu hooloo oruulsan
