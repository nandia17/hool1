import React from "react";
import Food from "../food";
import css from "./style.module.css";
function MenuBuilder(props) {
  const q = [];
  props.foods.map((el, i) => {
    q.push(
      <Food key={el.ner + i} ner={el.ner} price={el.price} ImgUrl={el.imgUrl} />
    );
  });
  return <div className={css.menuBuilder}>{q}</div>;
}

export default MenuBuilder;
