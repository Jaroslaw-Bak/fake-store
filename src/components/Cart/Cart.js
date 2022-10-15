import styles from './Cart.module.css'
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../DataContext"


const Cart = () => {

    const { cartData, removeFromCart } = useContext(DataContext)
    const [ price, setPrice ] = useState(0)

  useEffect(() => {
    setPrice(0)
    const totalPrice = () => {
      cartData.map(element => {
        setPrice(prevState => prevState + element.price )
        return null
      })
    }
    totalPrice()
  },[cartData])
   
  return (
    <>
          <div className={styles.cart}>
            <table>
              <tr>
                <th></th>
                <th></th>
                <th className={styles.product}>Product</th>
                <th>Price</th>
                
                <th>Subtotal</th>
              </tr>
              {cartData.map(product => (
              <tr>
                <td><button onClick={() => removeFromCart(product)}>X</button></td>
                <td>
                  <img src={product.images[0]} alt='watch' /> 
                </td>
                <td className={styles.product}>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.price}</td>
              </tr>
              ))}   
            </table>      
            <div className={styles.total}>
              <div className={styles.total__flex}>
                <p>Total: </p>
                <p>{price}</p>
              </div>
              <button>Proceed to checkout</button>
            </div>      
        </div>
        
      
  </>
  )
}

export default Cart