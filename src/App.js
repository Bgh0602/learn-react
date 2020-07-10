import React from "react";
import styled from "styled-components";

import cokeImage from "./cokeImage.jpg";
import ciderImage from "./ciderImage.jpg";
import fantaImage from "./fantaImage.png";
import coffeeImage from "./coffeeImage.jpg";
import cocoaImage from "./cocoaImage.jpg";
import waterImage from "./waterImage.jpg";

const Canvas = styled.canvas`
  border: 10px solid black;
  width: 400px;
  height: 500px;
`;
const CurrentMoney = styled.p`
  position: absolute;
  left: 250px;
  top: 230px;
`;
const CokeButton = styled.button`
  position: absolute;
  left: 70px;
  top: 100px;
`;
const CiderButton = styled.button`
  position: absolute;
  left: 195px;
  top: 100px;
`;
const FantaButton = styled.button`
  position: absolute;
  left: 320px;
  top: 100px;
`;
const CoffeeButton = styled.button`
  position: absolute;
  left: 70px;
  top: 200px;
`;
const CocoaButton = styled.button`
  position: absolute;
  left: 195px;
  top: 200px;
`;
const WaterButton = styled.button`
  position: absolute;
  left: 320px;
  top: 200px;
`;
const ChangeMoney = styled.button`
  margin-right: -6px;
  position: absolute;
  left: 200px;
  top: 290px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: white;
  border: 1px solid blue;
  color: blue;
  &:hover {
    background-color: skyblue;
  }
  &:active {
    transform: translateY(3px);
  }
`;
const CoinInlet = styled.button`
  margin-left: -10px;
  position: absolute;
  left: 310px;
  top: 290px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: white;
  border: 1px solid blue;
  color: blue;
  &:hover {
    background-color: skyblue;
  }
  &:active {
    transform: translateY(3px);
  }
`;
const CokeImage = styled.img`
  width: 50px;
  height: 70px;
  position: absolute;
  left: 70px;
  top: 30px;
`;
const CiderImage = styled.img`
  width: 50px;
  height: 70px;
  position: absolute;
  left: 195px;
  top: 30px;
`;
const FantaImage = styled.img`
  width: 50px;
  height: 70px;
  position: absolute;
  left: 320px;
  top: 30px;
`;
const CoffeeImage = styled.img`
  width: 50px;
  height: 70px;
  position: absolute;
  left: 70px;
  top: 130px;
`;
const CocoaImage = styled.img`
  width: 50px;
  height: 70px;
  position: absolute;
  left: 195px;
  top: 130px;
`;
const WaterImage = styled.img`
  width: 50px;
  height: 70px;
  position: absolute;
  left: 320px;
  top: 130px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 0,
      i: 0,
      wallet: Math.floor(Math.random() * 5 + 1),
    };
    this.putCoin = function () {
      if (this.state.i < this.state.wallet) {
        this.state.money += 1000;
        this.state.i += 1;
      }
      return this.state.money;
    };
    this.canvasRef = React.createRef();
    this.ctx = null;
  }

  componentDidMount() {
    this.ctx = this.canvasRef.current.getContext("2d");
    this.ctx.beginPath();
    this.ctx.moveTo(30, 30);
    this.ctx.lineTo(270, 30);
    this.ctx.moveTo(30, 60);
    this.ctx.lineTo(270, 60);
    this.ctx.moveTo(30, 90);
    this.ctx.lineTo(270, 90);
    this.ctx.rect(200, 95, 40, 5);
    this.ctx.rect(30, 105, 240, 30);
    this.ctx.stroke();
  }

  render() {
    return (
      <div className="App">
        <Canvas ref={this.canvasRef} />
        <CokeButton>coke</CokeButton>
        <CiderButton>cider</CiderButton>
        <FantaButton>fanta</FantaButton>
        <CoffeeButton>coffee</CoffeeButton>
        <CocoaButton>cocoa</CocoaButton>
        <WaterButton>water</WaterButton>

        <CoinInlet
          onClick={() => {
            this.putCoin();
          }}
        >
          coin inlet
        </CoinInlet>
        <ChangeMoney>change money</ChangeMoney>

        <CokeImage src={cokeImage} />
        <CiderImage src={ciderImage} />
        <FantaImage src={fantaImage} />
        <CoffeeImage src={coffeeImage} />
        <CocoaImage src={cocoaImage} />
        <WaterImage src={waterImage} />

        <h3>Price List</h3>
        <ul>
          <li>
            <strong>Coke</strong>:1200won
          </li>
          <li>
            <strong>Cider</strong>: 1200won
          </li>
          <li>
            <strong>Fanta</strong>: 900won
          </li>
          <li>
            <strong>Coffee</strong>: 900won
          </li>
          <li>
            <strong>Cocoa</strong>: 700won
          </li>
          <li>
            <strong>Water</strong>: 700won
          </li>
        </ul>
        <CurrentMoney>{this.state.money + "won"}</CurrentMoney>
      </div>
    );
  }
}

export default App;
