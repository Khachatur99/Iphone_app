/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import LayOut from "../components/Product/LayOut"
import { useAppContext } from "../context/AppContext/AppContext";

function CartPage(){
    const{cartListState, removehandler2}=useAppContext()
   
    return(
     <LayOut hideFilter>
    < div className="grid-container" >
        {cartListState.map((item)=>{
            return(
                <div className="Product" key={item.id}>
                    <Link to={`/product/${item.id}`}>
                <img  src={item.image} />   
                </Link> 
                <div className="text_container">
        <span className="title">{item.title}</span>
        <span className="price">{item.price}</span>
      </div>
      <span>{item.rating.rate}</span>
        
                <button onClick={() => 
                 removehandler2(item)}
                 className="add_cart"
                > Remove </button>
               </div>  
            )
        })}
           </div>
     </LayOut>
    )
}



export { CartPage}