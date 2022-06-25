import { useState } from 'react';

function Series(props) {
  
  const [buscar, setBuscar]= useState('')
  const [resultado, setResultado]=useState(<></>);

  const info = (title, imagen, character, comics)=>{
    setResultado(<div>
      <h2 className='name'>The title is {title}</h2>
      <div className='info'>
        <div>
          <p className='description'><h2>Characters: </h2>{character}</p>
          <p className='description'>Comics: {comics}</p>
        </div>
        <img src={imagen} alt="imagen de muestra del persoaje" className='character'></img>
      </div>
    </div>)
  }

  const fetiches  = async () =>{
    let data = {};
    let title = '';
    let imagen= '';
    let characters = '';
    let comics = '';

    await fetch(`http://gateway.marvel.com/v1/public/series?limit=100&titleStartsWith=${buscar}&ts=1&apikey=8647391dcd64fb37aed65587c692cb85&hash=059c9891e0d7109faefe1dc8bfd6d1ff`)
    .then(response=>response.json())
    .then(data_f=>{data = data_f; console.log(data_f);})
    let datos = data.data.results;
    for(let i=0; i<datos.length; i++){
      title = data.data.results[0].title;
      imagen= data.data.results[0].thumbnail.path+'/detail.'+data.data.results[0].thumbnail.extension;
      characters = data.data.results[0].characters.items[0].name;
      comics = data.data.results[0].comics.items[0].name;
      info(title, imagen, characters, comics)
    }
  }; 

  const cambiarSerie = (e) => {
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
        <h2 className='title' >Search For Your Serie</h2>
        <div>
          
        </div>
      </nav>
      <div className='apto'>
        <input type="text" id='buscar' className='search' onChange={cambiarSerie}></input>
      </div>
     <div id='busqueda'>{resultado}</div>
    </div>
    </>
     );
}

export default Series;