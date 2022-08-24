import React, { Component } from "react";
import CurrentOrder from "../current/current";
import MenuBuilder from "../menubuilder/menubuilder";
import style from "./style.module.css";
import Number from "../Number/number";
class Builder extends Component {
  state = {
    shirheg: {
      pizza1: 0,
      pizza2: 2,
      pizza3: 0,
      pizza4: 0,
      pizza5: 3,
      pizza6: 0,
      pizza7: 0,
    },
    foods: [
      {
        ner: "pizza1",
        price: 1.3,
        weight: "156g",
        imgUrl:
          "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        shirheg: 0,
      },
      {
        ner: "pizza2",
        price: 1.3,
        weight: "170g",
        imgUrl:
          "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600",
        shirheg: 0,
      },
      {
        ner: "pizza3",
        price: 1.3,
        weight: "156g",
        imgUrl:
          "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        shirheg: 0,
      },
      {
        ner: "pizza4",
        price: 1.3,
        weight: "190g",
        imgUrl:
          "https://images.pexels.com/photos/9093555/pexels-photo-9093555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        shirheg: 0,
      },
      {
        ner: "pizza5",
        price: 1.3,
        weight: "180g",
        imgUrl:
          "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        shirheg: 0,
      },
      {
        ner: "pizza6",
        price: 1.3,
        weight: "150g",
        imgUrl:
          "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        shirheg: 0,
      },
      {
        ner: "pizza7",
        price: 1.3,
        weight: "160g",
        imgUrl:
          "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        shirheg: 0,
      },
    ],
    totalPrice: 0,
  };

  hoolNemeh = (type) => {
    const shineHool = { ...this.state.shirheg };
    shineHool[type]++;
    this.setState({ shirheg: shineHool });
    // const shineUne = this.state.totalPrice + this.state.foods.price[type];
    // this.setState({ totalPrice: shineUne });
  };
  hoolHasah = (type) => {
    if (this.state.shirheg[type] !== 0) {
      console.log("-----------" + type);
      const shineHool = { ...this.state.shirheg };
      shineHool[type]--;
      this.setState({ shirheg: shineHool });
      // const shineUne = this.state.totalPrice + this.state.foods.price[type];
      // this.setState({ totalPrice: shineUne });
    }
  };
  render() {
    return (
      <div className={style.container}>
        <MenuBuilder foods={this.state.foods} />
        <CurrentOrder
          foods={this.state.foods}
          hoolNemeh={this.hoolNemeh}
          hoolHasah={this.hoolHasah}
          price={this.state.totalPrice}
          shirheg={this.state.shirheg}
        />
        {/* <Number shirheg={this.state.shirheg} /> */}
      </div>
    );
  }
}

export default Builder;
