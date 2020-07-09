import React from 'react';

// 덧셈 뺄셈 하는 계산기 만들기
// 기본 값은 0이다.
// 입력하는 곳에 숫자를 입력할 수 있다.
// 더하기 버튼을 누르면 값에 입력한 값 만큼을 더한다.
// 빼기 버튼을 누르면 값에 입력한 값 만큼을 뺸다.

// 0 [    ] [더하기] [빼기]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      input: '',
      number: '',
      result: 0,
    };
  }

  render() {
    // const increase = () => {
    //   const num = this.state.num;
    //   this.setState({
    //     num: num + 3,
    //   });
    // }

    // const decrease = () => {
    //   const num = this.state.num;
    //   this.setState({
    //     num: num - 3,
    //   });
    // }

    return (
      <div className="App">
        {JSON.stringify(this.state.list)}
        <input type="text" value={this.state.input} onChange={(event) => {
          this.setState({
            input: event.target.value
          })
        }}></input>
        <button onClick={() => {
          const list = this.state.list;
          this.setState({
            list: [...list, this.state.input],
            input: '',
          })
        }}>추가</button>

        <br />
        <div>{this.state.result}</div>
        <input type='text' value={this.state.number} onChange={(event) => {
          this.setState({
            number: event.target.value
          })
        }}></input>
        <button onClick={() => {
          const number = this.state.number;
          const result = this.state.result;
          this.setState({
            result: Number(result) + Number(number),
            number: '',
          })
        }}>
          add
        </button>
        <button onClick={() => {
          const number = this.state.number;
          const result = this.state.result;
          this.setState({
            result: Number(result) - Number(number),
            number: '',
          })
        }}>
          minus
        </button>
      </div>
    );
  }
}

export default App;
