import React from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import store from "./store/index.js"
class App extends React.Component {
   constructor(props){
      super(props)
      this.state={
         value:"",
         postId:2
      }
      this.handleChange=this.handleChange.bind(this)
      this.handleSubmit=this.handleSubmit(this)
   }
   handleChange(event){
      this.setState({value:event.target.value})
   }
   handleSubmit(event) {
      // alert('Content submitted: ' + this.state.value)
      // event.preventDefault()
      this.props.dispatch({
         type:"ADD_POST",
         payload:{id:this.state.postId,title:this.state.value}
      })
      this.setState({postId:this.state.postId + 1})
      console.log(this.props.posts)
    }
    componentDidMount=()=>{
       console.log(store.getState())
    }
   render(){
      return (
         <div className="App">
           <h2>Welcome</h2>
           <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
              <div><button type="submit">POST</button></div>
           </form>
           <div style={{textAlign:"left",justifyContent:"left"}}><ul>
              {this.props.posts.length && this.props.posts.map(posts=>(
                 <li key={posts.id}>{posts.title}</li>
              ))}
           </ul>
           </div>
         </div>
       )
   }
  
}

const mapStateToProps = state => {
  return { posts: state.posts }
}
const mapDispatchToProps = dispatch=>{
   return{
      dispatch
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)