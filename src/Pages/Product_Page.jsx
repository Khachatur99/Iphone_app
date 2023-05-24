/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react'
import { useParams , } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./product_page.css"

export default function Product_Page() {
const [product, setproduct] = useState([])
  const param =  useParams()
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => setproduct(res));
  }, [param.id]);

  return (
    <div className="Product_page_container">
    {[product].map(item => {
     return (
      <div className="Product_page" key={Math.random()}>
      <Link to={`/product/${item.id}`}>
  <img  src={item.image} />   
  </Link> 
  <div className="text_container">
<span className="title">{item.title}</span>
<span className="price">{item.price}</span>
</div>

 </div>  
     )
    })}
   </div>
  )
}
