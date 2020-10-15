import React from 'react';
import './Clock.css'
const clock = (props) => {
    if(props.playing === true){
        return(<div className="Clock">
            <p>
            <span onClick={props.focus}>{String(props.hour).padStart(2, '0')}</span> : <span onClick={props.focus}>{String(props.minutes).padStart(2, '0')}</span> : <span onClick={props.focus}>{String(props.seconds).padStart(2, '0')}</span> <span onClick={props.focus}>{props.apm}</span>
            </p>
        </div>)
    } else {
        return (<div className="Clock">
        <p>
            <input type="text" value={String(props.hour).padStart(2, '0')} id="hour" onChange={props.changeHour} onKeyUp={props.enterUp} />
            :
            <input type="text" value={String(props.minutes).padStart(2, '0')} id="minutes" onChange={props.changeMin} onKeyUp={props.enterUp} />
            :
            <input type="text" value={String(props.seconds).padStart(2, '0')} id="second" onChange={props.changeSec} onKeyUp={props.enterUp} />
            <select list="A_PM" value={props.apm} onChange={props.changeAPM} onKeyUp={props.enterUp}>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
            
        </p>
    </div>);
    }
    
}

export default clock;