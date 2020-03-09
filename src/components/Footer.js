import React from 'react'

let Footer =(props)=>{
    return(

        <div className='footer-button'  >
           { !props.editing ?
        (   <div className='button-container'><button onClick={props.decrement}className="Previous"> Prev</button>
        <button onClick={props.toggleChange} className='Edit'>Edit</button>
        <button onClick={() => {
        console.log(props.data[props.index].id)
        props.deletePlace(props.data[props.index].id)}
        } className='Delete'>Delete</button>
        
        <button  onClick={props.increment}  className="Next">Next</button></div>)
            :(
                <div>
                    <input placeholder="city" type="text" value={props.city} onChange={e=>props.handleChange(e)}/>
                    <input placeholder="stateCountry" type="text" value={props.stateCountry} onChange={e=>props.handleChange(e)}/>
                    <button onClick={()=>{
                        props.editPlace(props.id, {city:props.city, stateCountry:props.stateCountry})
                        props.toggleChange()
                    }}>Submit Changes</button>
                    <button onClick={props.toggleChange}>Cancel</button>
                </div>
            )}

            
                  
        </div>
)
}
export default Footer