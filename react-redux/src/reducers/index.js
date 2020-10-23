const initialState={
    posts:[{id: 1, title: 'Test Post'}],

}
const reducer=(state=initialState,action)=>{
if(action.type==='ADD_POST'){
    return Object.assign({},state, {
        posts:state.posts.concat(action.payload)
    })
}
return state
}
export default reducer;