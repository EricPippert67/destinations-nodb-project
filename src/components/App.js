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
            index:0,
            editing:false,
            city:'',
            img:'',
            stateCountry: '',
            whatToDo: '',
            placesToEat:'',
            whereToStay:''

        }
        this.decrement=this.decrement.bind(this)
        this.increment=this.increment.bind(this)
        this.createPlace=this.createPlace.bind(this)
        this.deletePlace=this.deletePlace.bind(this)
        this.editPlace=this.editPlace.bind(this)
    }
        componentDidMount(){
            axios.get('http://localhost:5500/api/destination')
            .then(res=> {
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
        createPlace(){
            const{city,img,stateCountry,whatToDo,placesToEat,whereToStay}=this.state
            axios.post('http://localhost:5500/api/destination',{city,img,stateCountry,whatToDo,placesToEat,whereToStay})
            .then(res=>{
                console.log("Data here", res.data)
                this.setState({
                    data:res.data
                })
            })
        }
        deletePlace(id){
        axios.delete(`http://localhost:5500/api/destination/${id}`)
        .then(res=>{
            this.setState({
                data: res.data
            })
        })
        }
        editPlace(id, body){
            axios.put(`http://localhost:5500/api/destination/${id}`, body)
            .then(res=>{
                this.setState({
                    data:res.data
                })
            })
        }
        handleChange=(e)=> {
            this.setState({
                [e.target.placeholder]:e.target.value
            })
        }
        toggleChange=()=>{
            this.setState({
                editing:!this.state.editing
            })
        }

    render(){
        const {editing, data, index, city, stateCountry}=this.state
    
  return(

        <div className= 'App'>

        <Header/>
        <section className='main'>
            <div className='sidebar-main'>
                <div className='sidebar'>
                    <h1> TOP 10 VACATION SPOTS:</h1>
                    <span className="sidebar-a">1- Paris, France</span>
                    <span className="sidebar-a">2- New York City, New York</span>
                    <span className="sidebar-a">3- Rome, Italy</span>
                    <span className="sidebar-a">4- Cancun, Mexico</span>
                    <span className="sidebar-a">5- London, England</span>
                    <span className="sidebar-a">6- Miami, Florida</span>
                    <span className="sidebar-a">7- Orlando, Florida</span>
                    <span className="sidebar-a">8- San Francisco, California</span>
                    <span className="sidebar-a">9-Myrtle Beach,South Carolina</span>
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
                   {this.state.data&&this.state.data.length > 0 && 
                 
                        <Footer increment={this.increment}
                                decrement={this.decrement}
                                createPlace={this.createPlace}
                                deletePlace={this.deletePlace}
                                data={this.state.data}
                                index={this.state.index}
                                editPlace={this.editPlace}
                                editing={editing}
                                city={city}
                                stateCountry={stateCountry}
                                handleChange={this.handleChange}
                                toggleChange={this.toggleChange}
                                id={data[index].id}
                                 />
                                }
                             <div>
                                
                                <input placeholder="city" type="text" onChange={e=>this.handleChange(e)}/>
                                <input placeholder="stateCountry" type="text" onChange={e=>this.handleChange(e)}/>
                                <input placeholder="img" type="text" onChange={e=>this.handleChange(e)}/>
                                <input placeholder="whatToDo" type="text" onChange={e=>this.handleChange(e)}/>
                                <input placeholder="placesToEat" type="text" onChange={e=>this.handleChange(e)}/>
                                <input placeholder="whereToStay" type="text" onChange={e=>this.handleChange(e)}/>
                                <button onClick={()=> this.createPlace()}>ADD DESTINATION</button>
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