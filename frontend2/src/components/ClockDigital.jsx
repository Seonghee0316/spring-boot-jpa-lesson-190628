import React from 'react'

const ClockDigital = (props) =>{
    let thisStyle={
        margin: '200px'
    }
    return (
        <div style={thisStyle}>
            {props.time}
        </div>
    );
}

export default ClockDigital;