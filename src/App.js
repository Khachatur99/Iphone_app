
import { useEffect, useState } from 'react';
import './App.css';
import Product from './components/Product';


function App() {
  const [allProducts, setAllProducts] = useState([]);
  const[category, setCategory] = useState("All")
  const[filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then( res=>{
    return res.json()
  }).then(res => setAllProducts(res));
  }, [])

  useEffect(()=>{
   
    if(category !== "All"){
      const filterItems = allProducts.filter(product => {
        return product.category === category
      })
      console.log(filterItems)

      setFilteredProducts(filterItems)
    } else {
      setFilteredProducts([]);
    }
  },[allProducts, category])

  useEffect(() => {
    console.log('filteredProducts', filteredProducts);
  }, [filteredProducts])



  return (
  
    <div className="App">
      <div className='header_'>
       <div className='QPICK_'> QPICK</div>
       <input type='checkbox' />
      
       <button className='Phone_'> 
         Select Phone 
           <select className='Phone_model'  defaultValue="All" onChange={(evt)=>{
            setCategory(evt.target.value)
           }} >
            <option value="jewelery">Jewelery</option>
            <option value="">Phone</option>
            <option value="All">All</option>
            <option value="">Cart_</option>
            <option value="">className</option>
            <option value="">Phoassne</option>

          </select>
        </button>
       <button className='Liked_phones'>
       <span className='liked__'>0</span>
       </button>
       
       <button className='Cart_'> 
       <span className='shopped_'>0</span>
       </button>
       
      </div>
      {filteredProducts.length === 0 && (
        <div className='grid-container'>
        {allProducts?.map((product) => <Product key={product.id} image={product.image} title={product.title} rating={product.rating.rate} price={product.price} />)}
        </div>

      )}
      
      {filteredProducts.length !== 0 && (
        <div className='grid-container'>
        {filteredProducts?.map((product) => <Product key={product.id} image={product.image} title={product.title} rating={product.rating.rate} price={product.price} />)}
        </div>
      )}

      
    
    </div>
  
  );
}

export default App;
