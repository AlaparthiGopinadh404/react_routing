import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function About() {
  var [items, setItems] = useState([])
  var select=useParams()
  console.log(select)
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${select.id}`)
    .then(res=>res.json())
    .then(json=>setItems(json))
  },[select.id])
  return (
    <div>
     <div className='row'>
       <div className='col-md-6'>
       <img src={items?.image} alt='photo' width="250px" height="300px" />
       </div>
       <div className='col-md-6'>
        <h3>{items?.title}</h3>
        <h3>{items?.price}</h3>
        <p><b>{items?.category}</b></p>
        {/* <small>{items?.description}</small> */}
        <p>{items?.rating?.rate}</p>
       </div>
     </div>
    </div>
    
  )
}

export default About;