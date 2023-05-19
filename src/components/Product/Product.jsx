import "./product.css";

function Product({ id, title, price, rating, image, addCart, addWishList, hideActions }) {
  return (
    <div className="Product">
      <img src={image} alt="" />
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
    </div>
  );
}
export default Product;
