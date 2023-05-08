    import "./product.css"
    
    function Product({id, title, price, rating, image}){

    return (
        <div className={'Product'}>
            <img src={image}/>
            <div className="text_container"> 
                <span className="title">{title}</span>
                <span className="price">{price}</span>
            </div>
            <span>{rating}</span>
        </div>
    )

}
export default Product