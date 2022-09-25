import styles from './Product.module.css'
import { DataContext } from '../../DataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {

  const { addToCart } = useContext(DataContext)

  return (
    <div className={styles.row}>
      <div className={styles.productWrapper}>
        <Link to='/SingleProduct'>
          <img src={props.images[0]} className={styles.image} alt='product image' />
        </Link>
        <div className={styles.description}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.price}>${props.price}</p>
          
          </div> 
      </div>
    </div>
  )
}

export default Product; 