import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home_page";
import {CartPage} from "./Pages/Cart_page";

import WishList from "./Pages/Wish_List";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/cartPage" element={<CartPage/>}/>
      </Routes>
    </>
  );
}

export default App;
