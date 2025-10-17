//import { useState } from 'react'
import './App.css'
import AminosMain from './components/AminosMain/AminosMain'
//import Aminoachart from './components/aminoachart'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
              <AminosMain 
                valine_percentage={12.3} histidine_percentage={23.4} tryptophan={54.0} threonine={45.6} 
                phenylalanine={34.5} methionine={22.1} lysine={18.9} leucine={29.4} isoleucine={15.2} 
              />
      </div>
      
    </>
  )
}

export default App
