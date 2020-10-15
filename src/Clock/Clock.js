import React from 'react';
import './Clock.css'
const clock = (props) => {
    
    return (<div className="Clock">
        <h2>
            <input type="text" value={props.hour} id="hour" onChange={props.changeHour} onFocus={props.focus} onKeyUp={props.enterUp} />
            :
            <input type="text" value={props.minutes} id="minutes" onChange={props.changeMin} onFocus={props.focus} onKeyUp={props.enterUp} />
            :
            <input type="text" value={props.seconds} id="second" onChange={props.changeSec} onFocus={props.focus} onKeyUp={props.enterUp} />
            <select list="A_PM" value={props.apm} onChange={props.changeAPM} onFocus={props.focus} onKeyUp={props.enterUp}>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
            
        </h2>
    </div>);
}

export default clock;