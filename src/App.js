import React, { useState } from 'react';
import './App.css';
import Personajes from './Personajes';
import Comics from './Comics';
import Eventos from './Eventos';
import Series from './Series';

function App() {
  const [content, setContent] = useState(<></>)

  const Ver = (e) =>{ 
    switch(e.target.value){
      case 'Personajes':
        setContent(<Personajes />); break
      case 'Comics':
        setContent(<Comics />); break
      case 'Eventos':
        setContent(<Eventos />); break
      case 'Series':
        setContent(<Series />); break
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
            <button className='botonx' onClick={Ver} value='Series'>Series</button>
          </nav>
          <div className='contenido'>{content}</div>
        </div>
    </div>
  )
};

export default App;