import styles from './SingleProduct.module.css'
import productImage from '../../assets/shoes.jpg'

const SingleProduct = () => {
  return (
    <div className={styles.row}>    
      <div className={styles.col__2}>
        <img src={productImage} />
      </div>
      <div className={styles.col__2}>      
        <h1>Handmade Cotton Shoes</h1>
        <p className={styles.price}>$327</p>
        <p className={styles.description}>"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality</p>
        <select>
          <option>Select size</option>
          <option>39</option>
          <option>40</option>
          <option>41</option>
          <option>42</option>
        </select>
        <input placeholder='1'></input>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default SingleProduct