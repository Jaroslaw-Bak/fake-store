import styles from './Product.module.css'
import { DataContext } from '../../DataContext';
import { useContext } from 'react';

const Product = (props) => {
  const { addToCart } = useContext(DataContext)
  return (
    <div className={styles.product}>
        <img src={props.images[0]} className={styles.image}  alt='product image' />
        <div className={styles.info}>
          <div className={styles.info__top}>
            <p>{props.title}</p>
          </div>
          <div className={styles.info__bottom}>
            <p>{props.price}$</p>
            
            <button onClick={() => addToCart(props)}>
              add</button> 
          </div>
        </div>
    </div>
  )
}

export default Product; 