import "./product.css"


    
    function Product({id, title, price, rating, image, }){
        
    return (
        <div className='Product'>
            <img src={image} alt=""/>
            <div className="text_container"> 
                <span className="title">{title}</span>
                <span className="price">{price}</span>
                
            </div>
            <span>{rating}</span>
            <button className="add_cart" > 
            Add to Cart </button>
        </div>
    )

}
export default Product