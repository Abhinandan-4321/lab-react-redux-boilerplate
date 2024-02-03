const initial = {
    count: 0,
}

const reducer = (state = initial, action)=>{
    switch(action.type){
    case "INCREMENT":
        return{
            count: state.count + 1
        }
    

    case "DECREMENT":
        return{
            count: state.count - 1
        }
    }

}
export default reducer