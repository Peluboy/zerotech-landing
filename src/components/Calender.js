import React from 'react'
import ButtonGroup from './ButtonGroup'
import './calender.css'

const Calender = () => {

  const printButtonLabel = (event) => {
    console.log(event.target.name);
  }

  return (
    <div className='calenderSection'>
      <h3>Select Date/Time</h3>
      <div className='dateTime'>
        <h5 style={{paddingTop:30, paddingBottom:10}}>02 April 2022</h5>
        <div className='buttons'>
          <ButtonGroup buttons={["9:30 PM", "11:30 PM", "02:30 PM", "03:45 PM", "05:00 PM"]}
          disabled={["9:30 PM"]}
          doSomethingAfterClick={printButtonLabel}
          />
        </div>
      </div>

      <div className='dateTime'>
        <h5 style={{paddingTop:20, paddingBottom:10}}>03 April 2022</h5>
        <div className='buttons'>
          <ButtonGroup buttons={["12:15 PM", "02:20 PM", "03:45 PM"]}
          disabled={["9:30 PM"]}
          doSomethingAfterClick={printButtonLabel}
          />
        </div>
      </div>

      <div className='dateTime'>
        <h5 style={{paddingTop:20, paddingBottom:10}}>04 April 2022</h5>
        <div className='buttons'>
          <ButtonGroup buttons={["9:30 PM", "11:30 PM", "02:30 PM"]}
          disabled={["9:30 PM"]}
          doSomethingAfterClick={printButtonLabel}
          />
        </div>
      </div>
      <h3>Book using Calender</h3>
      <span className='divider'>
        <img src="./assests/divider.svg" alt=""/>
      </span>
      <div className='book'>
        <img src="./assests/arrow-2.svg" alt=""/>
        <button className='btn-3'>Book Now</button>
      </div>
    </div>
  )
}

export default Calender
