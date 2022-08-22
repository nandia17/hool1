import React from "react";
import style from "./style.module.css";
const Food = (props) => {
  return (
    <div className={style.food}>
      <span>
        <h1>{props.ner}</h1>
        <p>{props.price}</p>
      </span>
      <img src={props.ImgUrl} alt="food photo" width="40%" height="100px"></img>
    </div>
  );
};
export default Food;
