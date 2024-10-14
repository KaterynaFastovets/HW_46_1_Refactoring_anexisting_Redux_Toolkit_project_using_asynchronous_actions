import { useDispatch, useSelector } from 'react-redux'
import { decrementAsync, incrementAsync } from '../redux/counterSlise'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(incrementAsync())}>Increment after 1 second</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement after 1 second</button>
    </div>
  )
}

export default Counter