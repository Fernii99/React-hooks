import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const { counter, increment, reset, decrease } = useCounter();


  return (
    <>
        <h1> Counter with Hook: {counter}</h1>
        <hr/>
        
        <button className="btn btn-primary" onClick={() => increment(3)}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={() => decrease(3)}>-1</button>

    </>
  )
}
