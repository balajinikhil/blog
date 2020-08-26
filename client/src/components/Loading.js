import React from 'react'

const Loading  = (props ) => {
 
    return(
        <div className="ui">
            <div className="ui active dimmer">
            <div className="ui indeterminate text loader">{props.msg || "Loading..."}</div>
            </div>
            <p></p>
          </div>
    )
}

export default Loading