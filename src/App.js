import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App m-6">
      {/* key-start */}
      <div className="bg-custom-keypad grid grid-cols-4 gap-4 p-7 rounded-md font-Spartan ">
        {/* FIRST ROW  */}
        <div className="btn__key ">7</div>
        <div className="btn__key">8</div>
        <div className="btn__key">9</div>
        <div className="btn__key-2">del</div>
        {/* SECOND ROW  */}
        <div className="btn__key ">4</div>
        <div className="btn__key">5</div>
        <div className="btn__key">6</div>
        <div className="btn__key">+</div>
        {/* THIRD ROW  */}
        <div className="btn__key ">1</div>
        <div className="btn__key">2</div>
        <div className="btn__key">3</div>
        <div className="btn__key">-</div>
        {/* FORTH ROW  */}
        <div className="btn__key ">.</div>
        <div className="btn__key">0</div>
        <div className="btn__key">/</div>
        <div className="btn__key">x</div>
        {/* FIFTY ROW  */}
        <div className=" col-span-2 btn__key-3 bg-custom-key font-Spartan text-white ">
          reset
        </div>
        <div className=" col-span-2 btn__key-3 text-white bg-custom-toggle shadow-key-shadow-text">
          {" "}
          =
        </div>
      </div>
    </div>
  );
}

export default App;
