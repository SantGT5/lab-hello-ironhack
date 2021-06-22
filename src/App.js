import ironLogo from './assets/images/ironhack-logo.svg';
import menuTop from './assets/images/menu-top.svg';
import icon1 from './assets/images/icon1.png';
import icon2 from './assets/images/icon2.png';
import icon3 from './assets/images/icon3.png';
import icon4 from './assets/images/icon4.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    
    
    <div className="App">
        <header>
        <div className = "square">
          <div>
          <img className = "ironLogo" src={ironLogo}/>
          <button className = "menuTop" ><img src={menuTop}/></button>
          </div>
        <div className = "container">
          <h1 className = "title">Say hello to ReactJS</h1>

          <h2 className = "text">You will learn how to use the most popular frontend libbrary, and become a super Ninja developer.</h2>

          <button className="button">Awesome!</button>
          </div>
        </div>

        <div className= "d-flex justify-content-evenly">

          <figure>
            <img className = "iconImg" src={icon1}></img>
            <figcaption className= "titleIcon">Declarative</figcaption>
            <p className= "subTitle">React makes it painless to create interactive UIs.</p>
            </figure>

          <figure>
            <img className = "iconImg" src={icon2}></img>
            <figcaption className= "titleIcon">Companents</figcaption>
            <p className= "subTitle">Build encapsulated componentes that manage their state.</p>
            </figure>

          <figure>
            <img className = "iconImg" src={icon3}></img>
            <figcaption className= "titleIcon">Single-Way</figcaption>
            <p className= "subTitle">A set of immutable values are passed to  the component's</p>
            </figure>

          <figure>
            <img className = "iconImg" src={icon4}></img>
            <figcaption className= "titleIcon">JSX</figcaption>
            <p className= "subTitle">Statically-typed, designed to run on modern browserd.</p>
            </figure>

        </div>
        </header>
    </div>
  );
}

export default App;
