import React from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  border: 10px solid black;
  width: 400px;
  height: 500px;
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
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      input: "",
      number: "",
      result: 0,
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
        <ChangeMoney>change money</ChangeMoney>
        <CoinInlet>coin inlet</CoinInlet>
      </div>
    );
  }
}

export default App;
