import styles from './Product.module.css'
import { DataContext } from '../../DataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Product = ({id, title, price, images}) => {

  const { addToCart } = useContext(DataContext)

  return (
    <div className={styles.row}>
      <div className={styles.productWrapper}>
        <Link to={`/SingleProduct/${id}`} >
          <img src={images[0]} className={styles.image} alt='product image' />
        </Link>
        <div className={styles.description}>
          <p className={styles.title}>{title}</p>
          <p className={styles.price}>${price}</p>
          
          </div> 
      </div>
    </div>
  )
}

export default Product; 