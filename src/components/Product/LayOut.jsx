import { useEffect, useState } from "react";

import { useAppContext } from "../../context/AppContext/AppContext";
import { Link } from "react-router-dom";



function LayOut({ category, setCategory, children, hideFilter}) {
  const [allProducts, setAllProducts] = useState([]);
  const [ , setFilteredProducts] = useState([]);
  const [registr, setRegistr] = useState(false)
 const { cartListState, wishListState, }=useAppContext()
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
        
      })
      .then((res) => setAllProducts(res));
  }, []);

  useEffect(() => {
    if (category !== "All") {
      const filterItems = allProducts.filter((product) => {
        return product.category === category;
      });
      setFilteredProducts(filterItems);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [allProducts, category]);
   
  

  return (
    <>
      <div className="header_">
        <button className="QPICK_">
          <Link to={"/"}>QPICK</Link>
        </button>
        <button className="Phone_">
            {!hideFilter &&
               <select
               className="Phone_model"
               defaultValue="All"
               onChange={(evt) => {
                 setCategory(evt.target.value);
               }}
               
             >
               <option value="All">All</option>
               <option value="jewelery">Jewelery</option>
               <option value="electronics"> Electronics</option>
               <option value="women's clothing"> Women's Clothing </option>
               <option value="men's clothing"> Men's Clothing</option>
             </select>
            
            }
       
        </button>

        <div className="liked_cart">
            <Link to="/WishList">
          <button className="Liked_phones">
            <span className="liked__">{wishListState.length}
            </span>
          </button>
          </Link>
          

                <Link to="/CartPage">
          <button className="Cart_">
            
            <span className="shopped_">{cartListState.length}</span>
            
          </button>
          </Link>
          <div className="registration" onClick={()=>{return setRegistr(!registr)}} >
            {registr && <div>
              <h4>Welcome</h4>
             <span>To access wishlist or cart</span> 
             <Link to="/Registration">
             <button>Sign In</button>
             </Link>

            </div> }
            

          </div>
        </div>
      </div>
            <div>{children}</div>
    </>
  );
}
export default LayOut;
