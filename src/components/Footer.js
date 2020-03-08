import React from 'react'

let Footer =(props)=>{
    return(

        <div>

            <div className='Button1-previous'>
            <button onClick={props.decrement}className="Previous"> Prev</button>
             </div>   

            <div className='Button2-next'>
            <button  onClick={props.increment}  className="Next">Next</button>
            </div>  

                  
        </div>
)
}
export default Footer