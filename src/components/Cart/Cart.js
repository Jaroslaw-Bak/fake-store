import { useContext } from "react"
import { DataContext } from "../../DataContext"

const Cart = () => {

    const { cartData } = useContext(DataContext)

  return (
    <div>
        {cartData.map(product => product.title)}
        
    </div>
  )
}

export default Cart