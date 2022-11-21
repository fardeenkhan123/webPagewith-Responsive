import React,{ useEffect, useState,useRef } from "react";

export const Calculator = () => {
 const inputRef=useRef(null)
  const [data, setData] = useState("");


  useEffect(()=>inputRef.current.focus()

  );

  const handleClick=(e)=>{
    setData(  data+e.target.value)

  }

  const handleBackSpace=()=>{
    setData(data.slice(0,-1))
  }

  const handleClear=()=>{
    setData("")
  }

  const handleResult=()=>{
    try{
    setData(eval(data).toString())
    }catch(error){
      setData("Error")
    }
  }
  return (
    <div className="New">
      <h1>Calculator</h1>
      <form>
        <input type="text" value={data} ref={inputRef} />
      </form>
      <div className="Keypad">
        <button id="Clear" onClick={handleClear}>Clear</button>
        <button id="BackSpace" onClick={handleBackSpace}>Cute</button>
        <button value="+" onClick={handleClick}>+</button>
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="-" onClick={handleClick}>-</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="*" onClick={handleClick}>x</button>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="/" onClick={handleClick}>/</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="." onClick={handleClick}>.</button>
        <button id="result" onClick={handleResult}>Result</button>
      </div>
    </div>
  );
};

export default Calculator;
