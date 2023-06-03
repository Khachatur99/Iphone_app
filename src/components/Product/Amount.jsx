import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext/AppContext"

 
 


function Amount(){
    const { cartListState, } = useAppContext();
      const [amount, setAmaount] = useState(0)
     useEffect(()=>{
         cartListState.map((item)=>{
            return setAmaount((prev)=>{
                console.log(prev);
                return ((prev + item.price))
             })
           })
     },[cartListState])
    return(
        <div>
       {amount}
       </div>
    )
}
export default Amount