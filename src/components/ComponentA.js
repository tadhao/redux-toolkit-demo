import { useDispatch, useSelector } from "react-redux";

const ComponentA = () => {
    const counter = useSelector(state=> state.counter)
    const hideCounter = useSelector(state=> state.hideCounter)
    const dispatch = useDispatch();
    return(
        <div>
            {!hideCounter && (
                <h2>Counter: {counter}</h2>
            )}
            <button onClick={()=> dispatch({type: "inc"})}>Increment</button>
            <button onClick={()=> dispatch({type: "dec"})}>Decrement</button>
            <button onClick={()=> dispatch({type: "hideCounter"})}>Hide Counter</button>
        </div>
    )
}

export default ComponentA;