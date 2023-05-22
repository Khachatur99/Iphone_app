import { Link } from "react-router-dom";
import "./product.css";
import { useAppContext } from "../../context/AppContext/AppContext";

function Product({ id, title, price, rating, image, addCart, addWishList, hideActions, removeWish, removeCart}) {
  const {wishListState, setWishListState} = useAppContext()
  const {cartListState, setCartListState} = useAppContext()
  return (
    <div className="Product">
      <Link to={`/${id}`}>
      <img src={image} alt="" />
      </Link>
      <div className="text_container">
        <span className="title">{title}</span>
        <span className="price">{price}</span>
      </div>
      <span>{rating}</span>
    
      {!hideActions && <>
      <button className="add_cart" onClick={addCart}>
        Add to Cart
      </button>
      <button className="Wish_List" onClick={addWishList}> Wishlist </button>
      </>}
      {removeWish &&
      <button className="remove_item" onClick={(id)=>{
         // eslint-disable-next-line array-callback-return
         wishListState.map((arr)=>{
          if(arr.id !== id){
            const remove = wishListState.filter((a)=>{
              return a.id === id
            })
            setWishListState(remove)
           }else{
            return wishListState
           }
        })
      }} > Remove </button>
      }
      {removeCart &&
      <button className="remove_item" onClick={(id)=>{
         // eslint-disable-next-line array-callback-return
         cartListState.map((arr)=>{
          if(arr.id !== id){
            const remove = cartListState.filter((a)=>{
              return a.id === id
            })
            setCartListState(remove)
           }else{
            return cartListState
           }
        })
      }} > Remove </button>
      }


    </div>
  );
}
export default Product;
