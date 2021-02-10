import React from 'react'

const backgroundComponent = (props) => {
    return (
        <div>
            <button onClick={props.changeColor}> Click </button>
        </div>
    )
}

export default backgroundComponent;