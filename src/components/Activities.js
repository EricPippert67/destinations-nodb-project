import React, {Component} from 'react'


function Button(props) {
    
    return(

        <div className='Button1'>
            <button onClick={props.decrement}className="Previous"> Prev</button>

            <div className='Button2'>
            <button  onClick={props.increment}  className="Next">Next</button>
            </div>


        </div>
    )

    
}
    export default Activities.js

