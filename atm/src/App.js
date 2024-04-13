import logo from './atm_sign.png';
import logoGraffiti from './graffiti.png';
import logoGraffitiTwo from './sticker_graf.png';


import './App.css';
import ATM from './components/atmInteface';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoGraffiti} className="Over-Image" alt="otra imagen" />
        <img src={logoGraffiti} className="Over-Image" alt="otra imagen" />
        <img src={logoGraffitiTwo} className="Over-ImageTwo" alt="otra imagen" />
        <ATM />
      </header>
    </div>
  );
}

export default App;
