import React,{Component} from 'react'
import Header from './Header'
import Places from './Places'
import Footer from './Footer'
import './App.css'
import axios from 'axios'


class App extends Component{
    constructor(){
        super();
        this.state={
            data: [],
            index:0
        }
        this.decrement=this.decrement.bind(this)
        this.increment=this.increment.bind(this)
    }
        componentDidMount(){
            axios.get('http://localhost:5500/api/destination')
            .then(res=> {
                console.log(res.data)
                this.setState({
                    data:res.data
                })
               
        })
}

        decrement() {
            if(this.state.index > 0){
            this.setState({index:this.state.index-1})
            }
}       
        increment() {
            if(this.state.index<this.state.data.length-1){
            this.setState({index:this.state.index+1})
            }
        }
        

    render(){
        

    
  return(

        <div className= 'App'>

        <Header/>
        <section className='main'>
            <div className='sidebar-main'>
                <div className='sidebar'>
                    <span className="sidebar-a">1- Paris, France</span>
                    <span className="sidebar-a">2- New York City, New York</span>
                    <span className="sidebar-a">3- Rome, Italy</span>
                    <span className="sidebar-a">4- Cancun, Mexico</span>
                    <span className="sidebar-a">5- London, England</span>
                    <span className="sidebar-a">6- Miami, Florida</span>
                    <span className="sidebar-a">7- Orlando, Florida</span>
                    <span className="sidebar-a">8- San Francisco, California</span>
                    <span className="sidebar-a">9- Myrtle Beach, South Carolina</span>
                    <span className="sidebar-a">10- Branson, Missouri</span>
                </div>
                <div className="sidebar1">
                    <span className="sidebar1-a"></span>
                    <span className="sidebar1-a"></span>
                    <span className="sidebar1-a"></span>
                    <span className="sidebar1-a"></span>
                    <span className="sidebar1-a"></span>
                </div>
            </div>
            <div className='places-container'>
                    <div className='places'>
                       {this.state.data&&this.state.data.length > 0 && <Places
                        index={this.state.index}
                        data={this.state.data}
                         />
    }
                    </div>
                    <div className='button-container'>
                        <Footer increment={this.increment}
                                decrement={this.decrement} />

                    </div>


            </div>

            
        </section>


        

        <div>
        


         </div>  
  
  
  
  
      </div>
  )
}
  }
  export default App