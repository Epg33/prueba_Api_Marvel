import React, { useState } from 'react'
import './App.css'
import Personajes from './Personajes'

function App() {
  const [vis, setVis] = useState('hidden')

  const Ver = () =>{
    setVis('visible');
  }

  return (
    <>
      <div className='lainfo'>
          <h1 className='Titulo'>The <i>Marvel</i>ious info</h1>
          <nav className='nave'>
            <button className='botonx' onClick={Ver}>Personajes</button>
            <button className='botonx' onClick={Ver}>Comics</button>
            <button className='botonx' onClick={Ver}>Eventos</button>
            <button className='botonx' onClick={Ver}>Historias</button>
          </nav>
        </div>
      
      <Personajes show={vis}/>
    </>
  )
}

export default App;