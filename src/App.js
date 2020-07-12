import React from "react";
import styled, { css } from "styled-components";

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
  ${(props) =>
    props.buyCoke
      ? css`
          background-color: #f7819f;
        `
      : css`
          background-color: #ffff;
        `}
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

class Buttons extends React.Component {
  constructor(props) {
    super();
    this.giveCoke = props.giveCoke;
    this.giveCider = props.giveCider;
    this.giveFanta = props.giveFanta;
    this.giveCoffee = props.giveCoffee;
    this.giveCocoa = props.giveCocoa;
    this.giveWater = props.giveWater;
  }

  render() {
    return (
      <>
        <CokeButton
          buyCoke={true}
          onClick={() => {
            this.giveCoke();
          }}
        >
          coke
        </CokeButton>
        <CiderButton
          onClick={() => {
            this.giveCider();
          }}
        >
          cider
        </CiderButton>
        <FantaButton
          onClick={() => {
            this.giveFanta();
          }}
        >
          fanta
        </FantaButton>
        <CoffeeButton
          onClick={() => {
            this.giveCoffee();
          }}
        >
          coffee
        </CoffeeButton>
        <CocoaButton
          onClick={() => {
            this.giveCocoa();
          }}
        >
          cocoa
        </CocoaButton>
        <WaterButton
          onClick={() => {
            this.giveWater();
          }}
        >
          water
        </WaterButton>
      </>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 0,
      i: 0,
      wallet: Math.floor(Math.random() * 5 + 1),
    };

    this.putCoin = () => {
      const i = this.state.i;
      const money = this.state.money;
      const wallet = this.state.wallet;

      if (i < wallet) {
        this.setState({
          money: money + 1000,
          i: i + 1,
        });
      }
    };

    this.changeMoney = () => {
      this.setState({
        money: 0,
      });
    };

    this.giveCoke = () => {
      const money = this.state.money;

      if (money >= 1200) {
        this.setState({
          money: money - 1200,
        });
      }
    };

    this.giveCider = () => {
      const money = this.state.money;

      if (money >= 1200) {
        this.setState({
          money: money - 1200,
        });
      }
    };
    this.giveFanta = () => {
      const money = this.state.money;

      if (money >= 900) {
        this.setState({
          money: money - 900,
        });
      }
    };
    this.giveCoffee = () => {
      const money = this.state.money;

      if (money >= 900) {
        this.setState({
          money: money - 900,
        });
      }
    };
    this.giveCocoa = () => {
      const money = this.state.money;

      if (money >= 700) {
        this.setState({
          money: money - 700,
        });
      }
    };

    this.giveWater = () => {
      const money = this.state.money;

      if (money > 700) {
        this.setState({
          money: money - 700,
        });
      }
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
        <Buttons
          giveWater={this.giveWater}
          giveCocoa={this.giveCocoa}
          giveCoffee={this.giveCoffee}
          giveFanta={this.giveFanta}
          giveCider={this.giveCider}
          giveCoke={this.giveCoke}
        />

        <CoinInlet
          onClick={() => {
            this.putCoin();
          }}
        >
          coin inlet
        </CoinInlet>
        <ChangeMoney
          onClick={() => {
            this.changeMoney();
          }}
        >
          change money
        </ChangeMoney>

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
