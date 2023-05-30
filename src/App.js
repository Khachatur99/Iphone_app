/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home_page";
import {CartPage} from "./Pages/Cart_page";
import SignIn from "./Pages/SignIn";
import WishList from "./Pages/Wish_List";
import Product_Page from "./Pages/Product_Page";
import SignUp from "./Pages/SignUp";




function App() {
 
  return (
    <>
   
      <Routes>
        <Route path="SignUpPage" element={<SignUp/>} />
           <Route path="/SignInPage" element={<SignIn/>}/>
          <Route path="/" element={<HomePage />} />
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/cartPage" element={<CartPage/>}/>
          <Route path="/product/:id" element={<Product_Page />}/>
      </Routes>
    </>
  );
}

export default App;
