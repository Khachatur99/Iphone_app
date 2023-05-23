/* eslint-disable jsx-a11y/alt-text */
import LayOut from "../components/Product/LayOut"
import { useAppContext } from "../context/AppContext/AppContext";

function CartPage(){
    const{cartListState, removehandler2}=useAppContext()
   
    return(
     <LayOut hideFilter>
    < div className="grid-container" >
        {cartListState.map((item)=>{
            return(
                <div key={item.id}> <h1>{item.title}</h1><img style={{width: '150px'}} src={item.image} />   
        
                <button onClick={() => removehandler2(item)}>Remove</button>
               </div>  
            )
        })}
           </div>
     </LayOut>
    )
}



export { CartPage}