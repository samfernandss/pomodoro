import React, { useState } from 'react';

const Input = (props) => {

  function onChange( {target}) {
    props.onChange(target.value);
  }

  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type ={props.type} value={props.value} onChange={onChange}/>
    </>
  )
};

export default Input;