import "./App.css";
import Content from "./Content";
import Explanation from "./Explanation";
import Feedback from "./Feedback";

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        
            <h2 >Generate more leads with a professional landing page!</h2>
        
        <br />
        <form>
          <label htmlFor="email"></label>
          <input className="image"
            type="email"
            id="email"
            name="email"
            placeholder="enter email"
          ></input>
          <input type="submit"></input>
      </form>
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Content />
      <Explanation />
      <Feedback />
    </div>
  );
}

export default App;
