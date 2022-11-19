import React, { useState } from 'react'
import './buttonGroup.css'

const ButtonGroup = ({ buttons, doSomethingAfterClick }) => {
    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (event, id) => {
        setClickedId(id);
        doSomethingAfterClick(event);
      };
    
  return (
    <>
        {buttons.map((buttonLabel, i) => (
            <button key={i}
            name={buttonLabel} 
            onClick={(event) => handleClick(event, i)}
            // disabled="9:30 PM"
            className={i === clickedId ? "customButton active" : "customButton"}
            >
            {buttonLabel}
            </button>
        ))}
    </>
  )
}

export default ButtonGroup