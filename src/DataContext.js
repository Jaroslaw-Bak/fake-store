import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const [ category, setCategory] = useState('default category')
    const [ cartData, setCartData] = useState([])
    
    const changeCategory = (cat) => {
        setCategory(cat)
    }

    const addToCart = (product) => {
        setCartData(prevState => [...prevState, product]);
    }

    return (
        <DataContext.Provider value={{category, changeCategory, addToCart, cartData}}>
            {children}
        </DataContext.Provider>
    );
};
