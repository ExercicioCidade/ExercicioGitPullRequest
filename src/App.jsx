import React from 'react'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contato from './pages/Contato'


const App = () => {
  return (
    <>
      <div>
        <Footer/>
      </div>

        <div>
          <Home/>
        </div>

         <Contato/> 
    </>
  )
}

export default App
