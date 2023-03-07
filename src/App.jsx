import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'
import { increment, incrementBy , decrement } from './store/slices/counter'

function App() {
  
  const { counter } = useSelector( state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment()) }>
          Incrementar
        </button>
        <button onClick={() => dispatch(decrement()) }>
          Decrementar
        </button>
        <button onClick={() => dispatch(incrementBy(2)) }>
          Incrementar en 2
        </button>
      </div>
    </div>
  )
}

export default App
