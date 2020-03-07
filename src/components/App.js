import React,{Component} from 'react'
import Header from '../components/Header'
import Destination from '../components/Destination'
import Footer from '../components/Footer'
import './App.css'
import axios from 'axios'
import data from '../components/data'


class App extends Component {
    constructor(){
        super()
        this.state={
            data: data,
            index: 0
        }
        this.decrement=this.decrement.bind(this)
        this.increment=this.increment.bind(this)

    }
        decrement(){
            if(this.state.index > 0){
                this.setState({index:this.state.index -1})
            }
        increment(){
            if(this.state.index<this.state.data.length-1){
                this.setState({index:this.state.index+1})
            }
        }
        render() {

            return(

                <div className='App'>
                    <header className= 'App-header'>Destination</header>

                    <h1></h1>

                    <div>
                    <Carousel info={this.state.data[this.state.index]}
                        index={this.state.index}
                        data={this.state.index}/>

                    </div>

                <div>
                <Activities increment={this.increment}  decrement={this.decrement}/>

                </div>


                </div>


            )
            }
        
        }
}
export default APP