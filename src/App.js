import { useState } from "react";
import "./App.css";
import Steps from "./components/steps/Steps";
import Convertor from "./components/hex2rgb/Convertor";

function App() {
  const [selected, setSelected] = useState('hex2rgb');
  const btns = ["hex2rgb", "steps"].map((el, index) => {
    return (
      <button
        className={el === selected ? "btn styled" : "btn"}
        onClick={()=>{setSelected(el)}}
        key={index}
      >
        {el}
      </button>
    );
  });
  return (
    <div className="App">
      <div className="tollbar">{btns}</div>
      {selected==="hex2rgb" && <Convertor />}
      {selected==="steps" && <Steps/> }
    </div>
  );
}

export default App;
