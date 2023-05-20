import { useEffect, useState } from "react";

import Product from "../components/Product/Product";
import LayOut from "../components/Product/LayOut";
import { useAppContext } from "../context/AppContext/AppContext";


function HomePage() {
  
  // const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { setCartListState, cartListState, setWishListState, allProducts, setAllProducts } = useAppContext();



  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => setAllProducts(res));
  }, [setAllProducts]);

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
  const addCart = (item) => {
    setCartListState((prevCart) => {
      return [...prevCart, item];
    });
  };
  const addWishList = (item) => {
    setWishListState((prevCart) => {
      return [...prevCart, item];
    });
  };
  
  return (
   <>
    <LayOut carter = {cartListState} category={category} setCategory={setCategory}>
    <div className="App">
      {filteredProducts.length !== 0 && (
        <div className="grid-container">
          {filteredProducts?.map((product) => (
            <Product
            id={product.id}
              key={product.id}
              image={product.image}
              title={product.title}
              rating={product.rating.rate}
              price={product.price}
              addCart={() => addCart(product)}
              addWishList={() => addWishList(product)}
             
            />
          ))}
        </div>
      )}
    </div>
    </LayOut>
    </>
  );
}

export default HomePage;

