/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./product_page.css";
import LayOut from "../components/Product/LayOut";
export default function Product_Page() {

  const [product, setproduct] = useState([]);
  const param = useParams();



  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => setproduct(res));
  }, [param.id]);

  return (
    <LayOut hideFilter >
      
        {[product].map((item) => {
          return (
            <div className="Product_page" key={Math.random()}>
              <div className="Product_page_img"> 
                <img src={item.image} > 
                </img> 
                </div>
               <div className="Product_page_other"> 
                <h3>{item.title}</h3>
                <h1>{item.price}</h1>

              </div>
            </div>
          );
        })}
  
    </LayOut>
  );
}
