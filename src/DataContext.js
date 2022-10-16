import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const [ category, setCategory] = useState('1')
    const [ cartData, setCartData] = useState([])
    
    const changeCategory = (cat) => {
        setCategory(cat)
    }

    const addToCart = (product) => {
        const exist = cartData.find(x => x.id === product.id);
        exist ? setCartData(cartData.map(x => 
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
            : setCartData([...cartData, {...product, qty: 1}])
    }

    const removeFromCart = (product) => {
        
        const exist = cartData.find((x => x.id === product.id));      
        if (exist.qty === 1) {
           setCartData(cartData.filter(x => x.id !== product.id))
        }
        else {
            setCartData(cartData.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
        }
    }
    

    return (
        <DataContext.Provider value={{category, changeCategory, addToCart, cartData, removeFromCart}}>
            {children}
        </DataContext.Provider>
    );
};
