import {createStore} from 'redux'
import reducer from './Redux/Reducer'
import { Increment } from './Redux/Action'
import { Decrement } from './Redux/Action'
import { useEffect, useState } from 'react'

const store = createStore(reducer)

export default function LikeCounter() {
    
    store.subscribe(()=>{setState(store.getState().count)})
    const [state, setState] = useState(0)
    
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=>{store.dispatch(Increment())}}>Increment</button>
            <button onClick={()=>{store.dispatch(Decrement())}}>Decrement</button>
        </div>
    )
}