import "./App.css";
import Links from "./Links";
import logo from "./logo.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="http://ashutosh887.me/" target="_blank">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>Socials - By Ashutosh</p>
        <Links />
      </header>
    </div>
  );
}

export default App;
