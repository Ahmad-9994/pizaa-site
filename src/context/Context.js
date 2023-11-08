import React, { createContext, useState } from 'react'; 

const globalData = createContext(); 

const Context = ({ children }) => { 
  const[cartItem,setCartItem]=useState([])


                  ////////////////////get data from menue components//////////////////////
                  function getDataMenue(e){
                    setCartItem([...cartItem ,e])
                  }
                   ////////////////////////////////////////

  return (
    <globalData.Provider value={{cartItem ,getDataMenue}}> 
      {children}
    </globalData.Provider>
  );
}

export { Context, globalData }; 
