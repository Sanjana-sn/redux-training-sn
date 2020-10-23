import React from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import store from "./store/index.js"
import { addPost } from './actions'

class App extends React.Component {
   constructor(props){
      super(props)
      this.state={
         value:"",
         postId:2
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }
   handleChange(event){
      this.setState({value:event.target.value})
   }
   handleSubmit(event) {
      alert('Content submitted: ' + this.state.value)
      event.preventDefault()
      this.props.dispatch({
         type:'ADD_POST',
         payload:{id:this.state.postId,title:this.state.value}
      })
      this.setState({postId:this.state.postId + 1,value:""})
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
              <div><button type="submit" onClick={this.handleSubmit}>POST</button></div>
           </form>
           <div style={{textAlign:"left",justifyContent:"left"}}>
            <ul>
              {this.props.posts.map(post =>(
                 <li key={post.id}>{post.title}</li>
              ))}
           </ul>
           </div>
         </div>
       )
   }
  
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}
const mapDispatchToProps = (dispatch)=>{
   return{
      dispatch
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)