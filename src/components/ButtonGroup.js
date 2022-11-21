import React, { useState } from 'react'
import './buttonGroup.css'

const ButtonGroup = ({ buttons, doSomethingAfterClick, disabled }) => {
    const [clickedId, setClickedId] = useState(false);
    const [selectedButton, setSelectedButton] = useState(-1);

    const handleClick = (event, id) => {
        setClickedId(!clickedId);
        setSelectedButton(id);
        doSomethingAfterClick(event);
      };
    
  return (
    <>
        {buttons.map((buttonLabel, i) => (
            disabled.includes(buttonLabel) ? <button 
            key={i}
            name={buttonLabel} 
            onClick={(event) => handleClick(event, i)}
            disabled
            style = {{ border: 'none'}}
            className={i === clickedId ? "customButton active" : "customButton"}
            >
            {buttonLabel}
            </button> : <button 
            key={i}
            name={buttonLabel} 
            onClick={(event) => handleClick(event, i)}
            // disabled="9:30 PM"
            className={i === selectedButton && clickedId ? "customButton active" : "customButton"}
            >
            {buttonLabel}
            </button>
        ))}
    </>
  )
}

export default ButtonGroup