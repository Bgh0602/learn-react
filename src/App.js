import React, { useState, useEffect } from 'react';

function Header() {
  return <header>
    <h1>This is title</h1>
  </header>
}

function Nav() {
  return (<nav>
    <ol>
      <li>name : Bae</li>
      <li>home : Anjung</li>
      <li>age : 20</li>
    </ol>
  </nav>)
}

function Article(props) {
  console.log(props.content);


  return <article>
    Hello world Bye world <br />
    {props.content}
  </article>
}

function Footer(props) {
  return <footer>
    Thank you for reading.<br />
    {props.class}
  </footer>
}

function App() {
  const [message, setMessage] = useState('hello');

  useEffect(() => {
    setTimeout(() => {
      setMessage('BYE');
      console.log("message changed");
    }, 3000);
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Article content={message} />
      <Footer class=' feet' />
    </div>
  );
}


export default App;




