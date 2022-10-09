import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const [ category, setCategory] = useState('1')
    const [ cartData, setCartData] = useState([])
    
    const changeCategory = (cat) => {
        setCategory(cat)
    }

    const addToCart = (product) => {
        setCartData(prevState => [...prevState, product]);
    }

    const removeFromCart = (product) => {
        setCartData(prevState => prevState.filter(element => element !== product))
    }

    return (
        <DataContext.Provider value={{category, changeCategory, addToCart, cartData, removeFromCart}}>
            {children}
        </DataContext.Provider>
    );
};
