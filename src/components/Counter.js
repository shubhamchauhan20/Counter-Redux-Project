import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Counter.css'

export default function Counter() {
    const dispatch= useDispatch();
    const counter = useSelector(state => state.counter)

    function incrementHandler(){
        dispatch({type: 'INCREMENT'});
        console.log("INCREMENT");
    }
    function incrementHandleByFiver(){
        dispatch({type: 'INCREMENT', amount:5});
        console.log("INCREMENT");
    }

    function decrementHandler(){
        dispatch({type: 'DECREMENT'})
    }

  return (
    <div className='counter'>
      <h1>Redux Counter</h1>
      <div className='value'>{counter}</div>
      <button className='button' onClick={incrementHandler}>INCREMENT</button>
      <button className='button' onClick={incrementHandleByFiver}>INCREMENTBYFIVE</button>
      <button className='button' onClick={decrementHandler}>DECREMENT</button>
    </div>
  )
}
