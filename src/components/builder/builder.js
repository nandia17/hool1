import React, { useState } from "react";
import CurrentOrder from "../current/current";
import MenuBuilder from "../menubuilder/menubuilder";
// import Topbar from "../navbar";

import style from "./style.module.css";

function Appp() {
  const [stock, setstock] = useState([
    {
      ner: "pizza1",
      price: 10,
      weight: "156g",
      imgUrl:
        "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      shirheg: 0,
    },
    {
      ner: "pizza2",
      price: 20,
      weight: "170g",
      imgUrl:
        "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600",
      shirheg: 0,
    },
    {
      ner: "pizza3",
      price: 30,
      weight: "156g",
      imgUrl:
        "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      shirheg: 0,
    },
    {
      ner: "pizza4",
      price: 40,
      weight: "190g",
      imgUrl:
        "https://images.pexels.com/photos/9093555/pexels-photo-9093555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      shirheg: 0,
    },
    {
      ner: "pizza5",
      price: 50,
      weight: "180g",
      imgUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      shirheg: 0,
    },
    {
      ner: "pizza6",
      price: 60,
      weight: "150g",
      imgUrl:
        "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      shirheg: 0,
    },
    {
      ner: "pizza7",
      price: 70,
      weight: "160g",
      imgUrl:
        "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      shirheg: 0,
    },
    {
      ner: "pizza8",
      price: 80,
      weight: "160g",
      imgUrl:
        "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      shirheg: 0,
    },
  ]);
  const [tot, settot] = useState({
    totalPrice: 0,
  });
  // too nemeh
  const add_stock1 = (i) => {
    let add = [...stock];
    add[i].shirheg++;
    setstock(add);
    // une nemeh
    const newPrice = tot.totalPrice + stock[i].price;
    tot.totalPrice = newPrice;
    settot(tot);
  };
  // too hasah
  const add_stock2 = (i) => {
    if ([...stock][i].shirheg !== 0) {
      let add = [...stock];
      add[i].shirheg--;
      setstock(add);
      // une hasah
      const newPrice = tot.totalPrice - stock[i].price;
      tot.totalPrice = newPrice;
      settot(tot);
    }
  };
  const disabledBtn = { ...stock };
  for (let key in disabledBtn) {
    disabledBtn[key] = disabledBtn[key] <= 0;
  }

  const zahia = (i) => {
    let add = [...stock];
    add[i].shirheg++;
    setstock(add);
    console.log(zahia);
  };

  return (
    <div className={style.container}>
      <MenuBuilder foods={stock} nemelt={zahia} />
      <CurrentOrder
        foods={stock}
        hoolNemeh={add_stock1}
        hoolHasah={add_stock2}
        une={tot}
      />
    </div>
  );
}

export default Appp;
