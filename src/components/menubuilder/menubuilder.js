import React from "react";
import Food from "../food";
import css from "./style.module.css";
function MenuBuilder(props) {
  const q = props.foods?.map((el, i) => {
    return (
      <Food
        key={el.ner + i}
        ner={el.ner}
        price={el.price}
        weight={el.weight}
        ImgUrl={el.imgUrl}
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
      />
    );
  });

  return <div className={css.menuBuilder}>{q}</div>;
}

export default MenuBuilder;
