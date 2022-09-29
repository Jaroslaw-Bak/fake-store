import styles from './Cart.module.css'
import { useContext } from "react"
import { DataContext } from "../../DataContext"
import watch from '../../assets/new4.jpg'
import shoe from '../../assets/new7.jpg'
import chair from '../../assets/new1.jpg'

const Cart = () => {

    const { cartData } = useContext(DataContext)

    {/* {cartData.map(product => product.title)} */}
  return (
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
          <tr>
            <td>X</td>
            <td>
              <img src={watch} alt='watch' /> 
            </td>
            <td className={styles.product}>Watch sfdsfsfsdf sfsvssscsffcs</td>
            <td>$23</td>
            <td><input placeholder='1' /></td>
            <td>$46</td>
          </tr>
          <tr>
            <td>X</td>
            <td>
              <img src={watch} alt='watch' /> 
            </td>
            <td className={styles.product}>Watch sfdsfsfsdf sfsvssscsffcs</td>
            <td>$23</td>
            <td><input placeholder='1' /></td>
            <td>$46</td>
          </tr>  
          <tr>
            <td>X</td>
            <td>
              <img src={watch} alt='watch' /> 
            </td>
            <td className={styles.product}>Watch sfdsfsfsdf sfsvssscsffcs</td>
            <td>$23</td>
            <td><input placeholder='1' /></td>
            <td>$46</td>
          </tr>    
        </table>      
          <div className={styles.total}>
            <div className={styles.total__flex}>
              <p>Total: </p>
              <p>$46</p>
            </div>
            <button>Proceed to checkout</button>
          </div>
        
       
         
        

        
    </div>
  )
}

export default Cart