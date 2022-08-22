import React, { Component } from "react";
import CurrentOrder from "../current/current";
import MenuBuilder from "../menubuilder/menubuilder";
import style from "./style.module.css";

// const food_price = {
//   Grilled_Corn: 15000,
//   Ranch_Burgers: 17000,
//   Beccon_pizza: 25000,
// };
class Builder extends Component {
  state = {
    foods: [
      {
        ner: "pizza",
        price: 1.3,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3UuYC8dLcrN8hC0C95FDHnYjQL79Fgn3WA&usqp=CAU",
      },
      {
        ner: "pizza",
        price: 1.3,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3UuYC8dLcrN8hC0C95FDHnYjQL79Fgn3WA&usqp=CAU",
      },
      {
        ner: "pizza",
        price: 1.3,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3UuYC8dLcrN8hC0C95FDHnYjQL79Fgn3WA&usqp=CAU",
      },
      {
        ner: "pizza",
        price: 1.3,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3UuYC8dLcrN8hC0C95FDHnYjQL79Fgn3WA&usqp=CAU",
      },
      {
        ner: "pizza",
        price: 1.3,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3UuYC8dLcrN8hC0C95FDHnYjQL79Fgn3WA&usqp=CAU",
      },
      {
        ner: "pizza",
        price: 1.3,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3UuYC8dLcrN8hC0C95FDHnYjQL79Fgn3WA&usqp=CAU",
      },
      {
        ner: "pizza",
        price: 1.3,
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3UuYC8dLcrN8hC0C95FDHnYjQL79Fgn3WA&usqp=CAU",
      },
    ],
  };
  render() {
    return (
      <div className={style.container}>
        <MenuBuilder foods={this.state.foods} />
        <CurrentOrder foods={this.state.foods} />
      </div>
    );
  }
}

export default Builder;
