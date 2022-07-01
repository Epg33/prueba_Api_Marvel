import { useState } from 'react';

function Personajes(props) {
  
  const [buscar, setBuscar]= useState('')
  const [resultado, setResultado]=useState(<></>);

  const xd = (nombre, imagen, descripcion)=>{
    setResultado(<div>
      <h2 className='name'>The Name is {nombre}</h2>
      <div className='info'>
        <p className='description'><h2>Description: </h2>{descripcion}</p>
        <img src={imagen} alt="imagen de muestra del persoaje" className='imagenes'></img>
      </div>
    </div>)
  }

  const fetiches  = async () =>{
    let data = {};
    let nombre = '';
    let imagen= '';
    let descripcion = '';
    await fetch(`http://gateway.marvel.com/v1/public/characters?limit=100&nameStartsWith=${buscar}&ts=1&apikey=8647391dcd64fb37aed65587c692cb85&hash=059c9891e0d7109faefe1dc8bfd6d1ff`)
    .then(response=>response.json())
    .then(data_f=>{data = data_f;})
    let datos = data.data.results;
    for(let i=0; i<datos.length; i++){
      nombre = data.data.results[i].name;
      imagen= data.data.results[i].thumbnail.path+'/detail.'+data.data.results[i].thumbnail.extension;
      if(data.data.results[i].description==''){
        descripcion = 'No description available'}
      else{
        descripcion = data.data.results[i].description;
      }
      xd(nombre, imagen, descripcion)
    }
  }; 

  const cambiarNombre = (e) => {
    if (e.target.value !== ''){
      setBuscar(document.getElementById('buscar').value)
    fetiches();
    }
    else{
      document.getElementById('busqueda').innerHTML = '';
    }
  }

  return (
    <>
    <div className="App" style={{visibility: props.show}}>
      <nav className='nav'>
        <h2 className='title' >Search For Your Character</h2>
        <div>
          
        </div>
      </nav>
      <div className='apto'>
        <input type="text" id='buscar' className='search' onChange={cambiarNombre}></input>
      </div>
     <div id='busqueda'>{resultado}</div>
    </div>
    </>
     );
}

export default Personajes;