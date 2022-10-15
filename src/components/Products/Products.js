import styles from './Products.module.css'
import Product from "../Product/Product"
import { DataContext } from '../../DataContext'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'


const Products = () => {
    const { category } = useContext(DataContext);
    const [ products, setProducts ] = useState();
    const [ sortType, setSortType] = useState('default');

    useEffect(() => {
      axios.get(`https://api.escuelajs.co/api/v1/categories/${category}/products`)
      .then(response => {
        setProducts(response.data)
      })
    },[category])
    
    useEffect(() => {
      const sortArray = (type) => {
        const types = {
          default: 'id',
          priceUp: 'price',
          priceDown: -'price'
        }
        const sortProperty = types[type]
          const sorted = products && [...products].sort((a,b) => a[sortProperty] > b[sortProperty] ? 1 : -1);
          setProducts(sorted)          
        }
      sortArray(sortType)
    },[sortType])
    
    

  return (    
    <div className={styles.products}>
      <div className={styles.row}>
        <div className={styles.col__2}>
          <h3>{products && products[0].category.name}</h3>
        </div>
        <div className={styles.col__2}>
          <select onChange={e => setSortType(e.target.value)}>
            <option value='default' >Default sorting </option>
            <option value='priceUp'>Sort by price up </option>
            <option value='priceDown'>Sort by price down</option>
          </select>
        </div>
      </div>
        <div className={styles.products__list}>
          {products && products.map(product => <Product key={product.id} {...product}/>)}
        </div>
    </div>   
  )
}
export default (Products);