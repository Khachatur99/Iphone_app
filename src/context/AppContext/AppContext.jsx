import React, { createContext, useContext, useState } from 'react';

// Create the AppContext
const AppContext = createContext();

// Create the AppProvider
const AppProvider = ({ children }) => {
  
  const [wishListState, setWishListState]= useState([])
  const [cartListState, setCartListState]= useState([])
  const [allProducts, setAllProducts]= useState([])


  return (
    <AppContext.Provider value={{wishListState, setWishListState, cartListState, setCartListState, allProducts, setAllProducts }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
