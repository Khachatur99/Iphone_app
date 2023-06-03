/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import LayOut from "../components/Product/LayOut";
import { useAppContext } from "../context/AppContext/AppContext";
import { useState, } from "react";
import Amount from "../components/Product/Amount";

function  CartPage() {
  const { cartListState, removehandler2 } = useAppContext();
  const [count, setCount] = useState(1)
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };



  return (
    <LayOut hideFilter>
      <div className="grid-container">
      <Amount/>

        {cartListState.map((item) => {
          return (
           
            <div className="Product" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img src={item.image} />
              </Link>
              <div className="text_container">
                <span className="title">{item.title}</span>
                <span className="price">{item.price}$</span>
              </div>

              <button onClick={() => removehandler2(item)} className="add_cart">
                Remove
              </button>
              <div>
                <button onClick={decrement}>-</button>
                <input type="text" id="counter" value={count} readOnly/>
                <button onClick={increment}>+</button>
                </div>
            </div>
          );
        })}
        
      </div>
    </LayOut>
  );
}


export { CartPage };
