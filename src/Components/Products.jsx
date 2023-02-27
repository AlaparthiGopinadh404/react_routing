import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

function Products() {
    var [array,setArray]=useState([''])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(json=>setArray(json))
    })
    return (
    <div className='d-flex flex-wrap'>
        {
        array && array.map((a,i)=>{
            return <div className='w-25 p-3 border border-2'>
                
                <img src={a?.image} alt=""  width="250px" height="300px"/>
                <p><Link to={`/des/${a.id}`}>{a.title}</Link></p>
                <p>{a?.price }/-</p>
                {/* <p><Link to={`/des/${a.title}`}>{a?.title}</Link></p> */}
                {/* <p>{a?.description}</p> */}
                <p><b>{a?.category}</b></p>
            </div> 
            })
        }
    </div>
  )}

export default Products;