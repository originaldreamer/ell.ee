import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <div>

      </div>
      <h1>Eesti Liputoimkondade Liit</h1>
      <h2>Hello</h2>

      <div>
        
        {' '}<button onClick={() => setCount1((count) => count1 - 1)}>
            -
        </button>
        {' '}<button onClick={() => setCount1((count) => count1 + 1)}>
            +
        </button>

        &nbsp;&nbsp; a: &nbsp; {count1}
      </div>

      <div>
        
        {' '}<button onClick={() => setCount2((count2) => count2 - 1)}>
            -
        </button>
        {' '}<button onClick={() => setCount2((count2) => count2 + 1)}>
            +
        </button>

        &nbsp;&nbsp; b: &nbsp; {count2}
      </div>

      <div className="card">
        {count1}{' '} + {' '}{count2}
        {' '}={' '}
        {count1 + count2}


      </div>
      <p className="read-the-docs">
        tere 2.0
      </p>
    </>
  )
}

export default App
