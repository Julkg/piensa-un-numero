import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Mente from './layout/Mente'


function App() {

  

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mente/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
