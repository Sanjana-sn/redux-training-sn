import React,{Component} from "react"
import axios from "axios"

export default class GetApi extends React.Component{
    constructor(){
        super()
        this.state={
            persons:[]
        }
    }
    componentDidMount=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const persons=res.data;
            this.setState({persons});
        console.log(this.state.persons)

        })
    }
    render(){
        return(
            <div style={{backgroundColor:"grey",padding:"1%"}}>
                {this.state.persons.map((ele,id)=>(
                    <div style={{display:"flex",backgroundColor:"#ffffff",margin:"2%"}}>
                    <div style={{flex:1}}>{ele.name}</div>
                    <div style={{flex:1}}>{ele.username}</div>
                    <div style={{flex:1}}>{ele.website}</div>
                </div>
                ))}            
            </div>
        )
    }
}