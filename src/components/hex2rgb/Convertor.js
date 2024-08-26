import { useRef, useState } from "react";
import "../../App.css";


function Convertor() {
 
  const [value, setValue] = useState('#de9d10');
  const inputValue = useRef();
  function hex2RGB(hex) {
    if (!/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) {
      return 'Ошибка!'
    }
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  return (
    <div className="convertor" style={{background:value}}>
      <div className="input">
      <input maxLength={7} ref={inputValue} onChange={()=>{if(inputValue.current.value.length===7){setValue(inputValue.current.value)}}}/>
      <div style={{color:value==='#000000'? 'white':'black'}}>{hex2RGB(value)}</div>
      </div>

    </div>
  );
}

export default Convertor;
