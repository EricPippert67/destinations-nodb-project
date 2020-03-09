import React from 'react'
import './App.css'

    function Place(props){
        console.log(props.info.city
            )
               return(
                   <div>
             <div>
                <h1 className='id'>{props.data.id}</h1>
                <h1 className='places-counter'> {props.index +1} / {props.data.length}</h1>
            </div>
            <div className='places-spacer'></div>
            <div>
                <img src={props.info.img} className='places-img'/>
            </div>
            <div className='info-container'>
                <h2 className='places-title'>City:    {props.info.city}</h2>
            
                <h1 className='places-title'>State/Country:            {props.info.stateCountry} </h1>             
            
            
                
                <h1 className='places-title'> What to do:  {props.info.whatToDo[0]}</h1>
           
              
                <h1 className='places-title'>places to eat:{props.info.placesToEat[0]} </h1>
           
                <h1 className='places-title' >Where to stay:  {props.info.whereToStay[0]}</h1>
                </div>
            </div>    

            


        )
    }
    export default Place