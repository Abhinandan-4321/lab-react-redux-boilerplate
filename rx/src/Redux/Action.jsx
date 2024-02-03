const INCREMENT  = "INCREMENT"
const DECREMENT = "DECREMENT"

export function Increment() {
    return{
        type:INCREMENT,
    }
}

export function Decrement() {
    return{
        type:DECREMENT,
    }
}