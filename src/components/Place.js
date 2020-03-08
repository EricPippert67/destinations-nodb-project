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
                <h1 className='places-title'>city:    {props.info.city}</h1>
            
                <h1 className='places-title'>state-country:            {props.info.stateCountry} </h1>             
            
            
                
                <h1 className='places-title'> whatToDo:  {props.info.whatToDo[0]},  {props.info.whatToDo[1]},  {props.info.whatToDo[2]},  {props.info.whatToDo[3]},   {props.info.whatToDo[4]}</h1>                
           
              
                <h1 className='places-title'>placesToEat:  {props.info.placesToEat[0]},  {props.info.placesToEat[1]},  {props.info.placesToEat[2]},  {props.info.placesToEat[3]},  {props.info.placesToEat[4]}</h1>
           
                <h1 className='places-title' >whereToStay:  {props.info.whereToStay[0]}, {props.info.whereToStay[1]},  {props.info.whereToStay[2]},  {props.info.whereToStay[3]},  {props.info.whereToStay[4]}</h1>
                </div>
            

        </div>    


        )
    }
    export default Place