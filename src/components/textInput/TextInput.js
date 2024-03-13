import React, { forwardRef } from "react";
import './TextInput.scss'


const TextInput = forwardRef(function TextInput({value, placeholder, handleChange}, ref) {
  return <input className="text-input" type="text" value={value} placeholder={placeholder ? placeholder : ""} onChange={(e) => handleChange(e.target.value)} ref={ref}/>;
});

export default TextInput;
