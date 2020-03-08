import React,{Component} from 'react'
import Activities from './Activities'
import Place from './Place'

class Places extends Component{
    constructor(props){
        super(props);
        this.state ={


            
        }
    }
    render(){
        console.log(this.props.data)
        return(
            <div>

            <div>
                <Place
                info={this.props.data[this.props.index]}
                data={this.props.data}
                index={this.props.index}
                />
            </div>
              

           


{/* 
        </div> */}
                <Activities/>
                </div>
        )
    }
}
export default Places