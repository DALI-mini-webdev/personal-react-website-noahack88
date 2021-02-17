import React from 'react'

const BackgroundComponent = (props) => {
    return (
        <div>
            <button onClick={props.changeColor}> Change Background Color </button>
        </div>
    )
}

export default BackgroundComponent;