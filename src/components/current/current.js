import React from "react";
import stylee from "./style.module.css";
import CurrentFoods from "../currentFood/currentFood";

function CurrentOrder(props) {
  const w = [];
  props.foods.map((el, i) => {
    w.push(
      <CurrentFoods
        key={el.ner + i}
        ner={el.ner}
        price={el.price}
        ImgUrl={el.imgUrl}
        shirheg={props.shirheg}
      />
    );
  });
  return (
    <div className={stylee.www}>
      {w}
      <div className={stylee.ww}>Cashless Credit: {props.price} </div>
      <div className={stylee.wwww}>
        <button>Pay with Cashless Credit</button>
      </div>
      <h2>Total: {props.price}</h2>
    </div>
  );
}

export default CurrentOrder;
