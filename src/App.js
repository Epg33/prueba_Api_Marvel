import './App.css';
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [buscar, setBuscar]= useState('')

  const [resultado, setResultado]=useState('');

  const xd = (nombre, imagen, descripcion)=>{
    setResultado(<div>
      <h1>Que onda perro</h1>
      <h2>el nombre es {nombre}</h2>
      <img src={imagen}></img>
      <p>Descripcion: {descripcion}</p>
    </div>);
  }

  const fetiches  = async () =>{
    let data = {};
    let nombre = '';
    let imagen= '';
    let descripcion = '';
    await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${buscar}&ts=1&apikey=8647391dcd64fb37aed65587c692cb85&hash=059c9891e0d7109faefe1dc8bfd6d1ff`)
    .then(response=>response.json())
    .then(data_f=>{data = data_f; console.log(data_f);})
    nombre = data.data.results[0].name;
    imagen= data.data.results[0].thumbnail.path+'/standard_fantastic.'+data.data.results[0].thumbnail.extension;
    descripcion = data.data.results[0].description;
    xd(nombre, imagen, descripcion)
  };

  const cambiarNombre = (e) => {
    if (e.target.value != ''){
      setBuscar(document.getElementById('buscar').value)
    fetiches();
    }
    else{
      let output = document.getElementById('busqueda').innerHTML = '';
    }
  }

  return (
    <div className="App">
      <nav className='nav'>
        <h1>Tus personajes Favoritos</h1>
      </nav>
      <input type="text" id='buscar' onChange={cambiarNombre}></input>
     <button onClick={fetiches}>data</button>
      <button onClick={xd}>xd</button>
     <div id='busqueda'>{resultado}</div>
    </div>
  );
}

export default App;