import React from "react";
import Food from "../food";
import Topbar from "../navbar";
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
        // hoolNemeh={props.hoolNemeh}
        // hoolHasah={props.hoolHasah}
        nemelt={props.nemelt}
        index={i}
      />
    );
  });

  return (
    <div className={css.menuBuilder}>
      <div className={css.men}>
        <Topbar />
        <div className={css.me}>{q}</div>
      </div>
    </div>
  );
}

export default MenuBuilder;
