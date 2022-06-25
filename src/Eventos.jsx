import React, { useState } from 'react'

function Eventos() {
  const [evento, setEvento] = useState('');

  const cambiarEvento = (title, description, imagen) => {
    setEvento(
      <>
        <h2 className='name'>The event is {title}</h2>
        <div className='info'>
          <p className='description'>Description: {description}</p>
          <img src={imagen}></img>
        </div>
      </>
    )
  }

  const fetiches  = async () =>{
    let data = '';
    let title = '';
    let description = '';
    let imagen = '';
    await fetch(`http://gateway.marvel.com/v1/public/events?nameStartsWith=${evento}&ts=1&apikey=8647391dcd64fb37aed65587c692cb85&hash=059c9891e0d7109faefe1dc8bfd6d1ff`)
    .then(response=>response.json())
    .then(data_f=>{data = data_f; console.log(data_f);
      console.log(data)})
      title = data.data.results[0].title;
      description = data.data.results[0].description;
      imagen = data.data.results[0].thumbnail.path+'/detail.'+data.data.results[0].thumbnail.extension;
      cambiarEvento(title, description, imagen)
    }

    const elEvento = () => {
      setEvento(document.getElementById('evento').value)
      fetiches()
    }

  return (
    <div>
      <nav className='nav'>
        <h2 className='title' >Search For A Event</h2>
        <div>
          
        </div>
      </nav>
      <div className='apto'>
        <input type="text" id='evento' className='search' onChange={elEvento}></input>
      </div>
     <div id='busqueda'>{evento}</div>
    </div>
  )
}

export default Eventos;