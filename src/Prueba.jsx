import React from 'react'

function Prueba() {
  const fetiches  = async () =>{
    let data = '';
    await fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8647391dcd64fb37aed65587c692cb85&hash=059c9891e0d7109faefe1dc8bfd6d1ff`)
    .then(response=>response.json())
    .then(data_f=>{data = data_f; console.log(data_f);
      console.log(data)})
    }
    fetiches()
  return (
    <div>Prueba</div>
  )
}

export default Prueba;