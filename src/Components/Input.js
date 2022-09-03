import React from 'react';

const Input = ({id, label, type, value, onChange}) => {

  function handleChange({target: {value}}) {
    onChange(value*60);
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type ={type} value={value} onChange={handleChange}/>
    </>
  )
};

export default Input;