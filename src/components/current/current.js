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
        shirheg={el.shirheg}
      />
    );
  });
  return <div className={stylee.www}>{w}</div>;
}

export default CurrentOrder;
