import React from "react"
import axios from "axios"

export default class PostApi extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            address:''
        }
    }
    nameHandle= event =>{
        this.setState({name:event.target.value})
    }
    addressHandle= event =>{
        this.setState({address:event.target.value})
    }
    submitHandle= event =>{
        event.preventDefault();
        const user={
            name:this.state.name
        };
        axios.post('https://jsonplaceholder.typicode.com/users', {user})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitHandle}>
                <div style={{display:"flex",alignItems:"center"}}>
                <div style={{flex:0.5}}>Person Name:</div>
                <input style={{flex:1}} type="text" value={this.state.name} onChange={this.nameHandle} />
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                <div style={{flex:0.5}}>Address:</div>
                <textarea col="10" row="4" style={{flex:1}} value={this.state.address} onChange={this.addressHandle} />
                </div>
                <div><button type="submit">Submit</button></div>
                </form>
            </div>
        )
    }
}