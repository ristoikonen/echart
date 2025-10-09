//import { useState } from 'react'
import './App.css'
import Aminochart from './components/aminochart/aminochart'
import Aminoachart from './components/aminoachart'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
              <Aminochart valine_percentage={12.3} />
              <br/>
              <Aminoachart valine_percentage={12.3}  histidine_percentage={23.5}  />
      </div>
      
    </>
  )
}

export default App
