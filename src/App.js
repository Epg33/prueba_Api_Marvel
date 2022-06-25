import React, { useState } from 'react';
import './App.css';
import Personajes from './Personajes';
import Comics from './Comics';
import Prueba from './Eventos';
import Eventos from './Eventos';

function App() {
  const [viscar, setViscar] = useState('hidden')
  const [viscom, setViscom] = useState('hidden')
  const [visven, setVisven] = useState('hidden')
  const [visstr, setVisstr] = useState('hidden')
  const [content, setContent] = useState(<></>)

  const Ver = (e) =>{ 
    switch(e.target.value){
      case 'Personajes':
        setContent(<Personajes />); break
      case 'Comics':
        setContent(<Comics />); break
      case 'Eventos':
        setContent(<Eventos/>); break
      case 'Hitorias':
        setVisstr('visible'); setViscar('hidden'); setViscom('hidden'); setVisven('hidden'); break
    }
  };

  return (
    <div className='hola'>
      <div className='lainfo'>
          <h1 className='Titulo'>The <i>Marvel</i>ious info</h1>
          <nav className='nave'>
            <button className='botonx' onClick={Ver} value='Personajes'>Personajes</button>
            <button className='botonx' onClick={Ver} value='Comics'>Comics</button>
            <button className='botonx' onClick={Ver} value='Eventos'>Eventos</button>
            <button className='botonx' onClick={Ver} value='Historias'>Historias</button>
          </nav>
          <div className='contenido'>{content}</div>
        </div>
    </div>
  )
};

export default App;