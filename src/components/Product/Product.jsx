import { Link } from "react-router-dom";
import "./product.css";


function Product({
  id,
  title,
  price,
  rating,
  image,
  addCart,
  addWishList,
  hideActions,

}) {

  return (
    <div className="Product">
      <Link to={`product/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div className="text_container">
        <span className="title">{title}</span>
        <span className="price">{price}</span>
      </div>
      <span>{rating}</span>
      <button className="add_cart" onClick={addCart}>
            Add to Cart
          </button>

      {!hideActions && (
        <>
          <button className="Wish_List" onClick={addWishList}>
            {" "}
            Wishlist{" "}
          </button>
        </>
      )}
    </div>
  );
}
export default Product;
