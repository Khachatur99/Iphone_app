/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react'
import { useParams , } from 'react-router-dom'

export default function Product_Page() {
const [product, setproduct] = useState([])
  const param =  useParams()
  console.log(param)
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => setproduct(res));
  }, [param.id]);
  return (
    <div className="grid-container">
    {[product].map(item => {
  
     return <div> <h1>{item.title}</h1><img style={{width: '150px'}} src={item.image} />   
     
     </div>
    })}
   </div>
  )
}
