import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';


function App() {

  const counter = useSelector(state=>state.counter);
  const isLogged = useSelector(state=>state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment())} className="btn btn-primary m-2"><h3>+</h3></button>
      <button onClick={()=>dispatch(decrement())} className="btn btn-primary m-2"><h3>-</h3></button>
      {isLogged?<h3>Valuable Information I shouldn't see</h3>:''}
    </div>
  );
}

export default App;
