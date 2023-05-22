import { Link } from "react-router-dom";
import "./product.css";

function Product({ id, title, price, rating, image, addCart, addWishList, hideActions, removeItem,  }) {
 
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
      {removeItem && 
      <button className="remove_item" 
      
      > Remove </button>
      }

    </div>
  );
}
export default Product;
