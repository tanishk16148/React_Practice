import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, subtractNumber } from "./Redux/action";

const Calculator  = () => {
  const dispatch = useDispatch();
  const addResult = useSelector((state) => state.add.result);
  const subtractResult = useSelector((state) => state.subtract.result);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Counter</h2>

      <h3>Add Result: {addResult}</h3>
      <button onClick={() => dispatch(addNumber(1))}>Add 1</button>

      <h3>Subtract Result: {subtractResult}</h3>
      <button onClick={() => dispatch(subtractNumber(1))}>Subtract 1</button>

      <h3>Subtract Result: {subtractResult}</h3>
      <button onClick={() => dispatch(subtractNumber(1))}>Subtract 1</button>
      
      <h3>Subtract Result: {subtractResult}</h3>
      <button onClick={() => dispatch(subtractNumber(1))}>Subtract 1</button>
      
      <h3>Subtract Result: {subtractResult}</h3>
      <button onClick={() => dispatch(subtractNumber(1))}>Subtract 1</button>
      
      <h3>Subtract Result: {subtractResult}</h3>
      <button onClick={() => dispatch(subtractNumber(1))}>Subtract 1</button>
    </div>
  );
};

export default Calculator;