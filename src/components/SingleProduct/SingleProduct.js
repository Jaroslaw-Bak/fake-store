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
    id && fechBoot()
  },[id])

  const fechBoot = () => {
      axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(response => {
        setProduct(response.data)
      })
  }


    
  return (
    product && (
      <div className={styles.row}>    
        <div className={styles.col__2}>
          <img src={product.images[0]} />
        </div>
        <div className={styles.col__2}>      
          <h1>{product.title}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <select>
            <option>Select size</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
            <option>42</option>
          </select>
          <input placeholder='1'></input>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    )
  )
}

export default SingleProduct