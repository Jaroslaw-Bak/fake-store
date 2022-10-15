import styles from './SingleProduct.module.css'
import { DataContext } from '../../DataContext'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleProduct = () => {

  const { id } = useParams();
  const { addToCart } = useContext(DataContext);
  const [ product, setProduct] = useState();

  useEffect(() => {
    const fechBoot = () => {
      axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(response => {
        setProduct(response.data)
      })
  }

    id && fechBoot()
  },[id])

  
    
  return (
    product && (
      <div className={styles.row}>    
        <div className={styles.col__2}>
          <img src={product.images[0]} alt=''/>
        </div>
        <div className={styles.col__2}>      
          <h1>{product.title}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <input placeholder='1'></input>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    )
  )
}

export default SingleProduct