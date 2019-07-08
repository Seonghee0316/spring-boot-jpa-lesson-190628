import React from 'react'

const ClockDisplay = (props) =>{
    let date = new Date(props.time)
    let dialStyle= {
        position: 'relative',
        top: 100,
        left: 100,
        width: 400,
        height: 400,
        borderRadius: 2000,
        borderStyle: 'solid',
        borderColor: 'black'
    }
    let secondHandStyle = {
        position : 'relative',
        top: 200,
        left: 200,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + ((date.getSeconds()/60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red'
    }
    let minuteHandStyle = {
        position : 'relative',
        top: 200,
        left: 200,
        border: '1px solid red',
        width: '40%',
        height: 3,
        transform: 'rotate(' + ((date.getMinutes()/60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'gray'
    }
    let hourHandStyle = {
        position : 'relative',
        top: 194,
        left: 206,
        border: '1px solid red',
        width: '20%',
        height: 7,
        transform: 'rotate(' + ((date.getHours()/12) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'gray'
    }
    return (
        <div style={dialStyle}>
            <div style={secondHandStyle}></div>
            <div style={minuteHandStyle}></div>
            <div style={hourHandStyle}></div>
        </div>
    );
}
export default ClockDisplay;