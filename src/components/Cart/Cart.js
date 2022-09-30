import styles from './Cart.module.css'
import { useContext } from "react"
import { DataContext } from "../../DataContext"
import watch from '../../assets/new4.jpg'

const Cart = () => {

    const { cartData } = useContext(DataContext)

    
  return (
    <>
          <div className={styles.cart}>
            <table>
              <tr>
                <th></th>
                <th></th>
                <th className={styles.product}>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              {cartData.map(product => (
              <tr>
                <td>X</td>
                <td>
                  <img src={product.images[0]} alt='watch' /> 
                </td>
                <td className={styles.product}>{product.title}</td>
                <td>{product.price}</td>
                <td><input placeholder='1' /></td>
                <td>{product.price}</td>
              </tr>
              ))}   
            </table>      
            <div className={styles.total}>
              <div className={styles.total__flex}>
                <p>Total: </p>
                <p>?</p>
              </div>
              <button>Proceed to checkout</button>
            </div>      
        </div>
        
      
  </>
  )
}

export default Cart