import { useState } from "react";
import "./App.css";
import Store from "./components/steps/Store";
import Convertor from "./components/hex2rgb/Convertor";

function App() {
  const [selected, setSelected] = useState('hex2rgb');
  const btns = ["hex2rgb", "steps",'photo'].map((el, index) => {
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
      {selected==="steps" && <Store/> }
      {selected==="photo" && <Store/> }
    </div>
  );
}

export default App;
