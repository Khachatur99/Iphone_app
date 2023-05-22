import LayOut from "../components/Product/LayOut"
import { useAppContext } from "../context/AppContext/AppContext";
import Product from "../components/Product/Product";

function CartPage(){
    const{cartListState}=useAppContext()
   
    return(
     <LayOut hideFilter>
    < div className="grid-container" >
        {cartListState.map((product)=>(
        <Product
        id={product.id}
         key={product.id}
         image={product.image}
         title={product.title}
         rating={product.rating.rate}
         price={product.price}
         hideActions
         removeCart
         />
        
          ))}
           </div>
     </LayOut>
    )
}



export { CartPage}