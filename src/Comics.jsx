import React, { useState } from 'react';

function Comics(props) {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');

  const cambiarNombre = (titlex, imagen, precio) => {
    setInfo(
      <>
        <h3>The title is: {titlex}</h3>
        <div className='info'>
          <img src={imagen} className='imagenes' alt='imagen de muestra del comic'></img>
          <p className='description'>The price is: {precio}</p>
        </div>
      </>
    )
  }

  const elTitulo = () => {
    setTitle(document.getElementById('comic').value)
    fetiches()
  }
  const fetiches  = async () =>{
    let data = '';
    let titlex = '';
    let imagen = '';
    let precio = '';

    await fetch(`http://gateway.marvel.com/v1/public/comics?limit=100&titleStartsWith=${title}&ts=1&apikey=8647391dcd64fb37aed65587c692cb85&hash=059c9891e0d7109faefe1dc8bfd6d1ff`)
    .then(response=>response.json())
    .then(data_f=>{data = data_f;})
    titlex = data.data.results[0].title
    imagen = data.data.results[0].thumbnail.path+'/detail.'+data.data.results[0].thumbnail.extension
    precio = data.data.results[0].prices[0].price
    cambiarNombre(titlex, imagen, precio)
    }
  return(
    <>
      <div className="App" style={{visibility: props.show}}>
        <nav className='nav'>
          <h2 className='title' >Search For Your Comic</h2>
          <div>
            
          </div>
        </nav>
        <div className='apto'>
          <input type="text" className='search' onChange={elTitulo} id='comic'/>
        </div>
          <div>{info}</div>
      </div>
    </>
  )
}

export default Comics;