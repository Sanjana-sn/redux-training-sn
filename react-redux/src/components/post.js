import React from "react"
import axios from "axios"
import API from "../Api"

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
            name:this.state.name,
            address:this.state.address
        };
        API.post('users', {user})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        this.setState({name:"",address:""})
    }
    render(){
        return(
            <div style={{padding:"2%"}}>
                <form onSubmit={this.submitHandle}>
                <div style={{display:"flex",alignItems:"center",margin:"2%"}}>
                <div style={{flex:0.2}}>Person Name:</div>
                <input style={{flex:1}} type="text" name="name" value={this.state.name} onChange={this.nameHandle} />
                </div>
                <div style={{display:"flex",alignItems:"center",margin:"2%"}}>
                <div style={{flex:0.2}}>Address:</div>
                <textarea col="10" row="4" style={{flex:1}} name="address" value={this.state.address} onChange={this.addressHandle} />
                </div>
                <div style={{margin:"2%"}}><button type="submit">Submit</button></div>
                </form>
            </div>
        )
    }
}