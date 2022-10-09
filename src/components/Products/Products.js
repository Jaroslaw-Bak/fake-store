import styles from './Products.module.css'
import Product from "../Product/Product"
import { DataContext } from '../../DataContext'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'


const Products = () => {
    const { category } = useContext(DataContext);   
    const [ products, setProducts ] = useState();

    useEffect(() => {
      axios.get(`https://api.escuelajs.co/api/v1/categories/${category}/products`)
      .then(response => {
        setProducts(response.data)
        
      })
    },[category])
    
    const filter = (event) => {
      if (event.target.value === 'up') {
        const newProducts = products.sort((a,b) => a.price > b.price ? 1 : -1)
        setProducts([...newProducts])
      }
      if (event.target.value === 'down') {
        const newProducts = products.sort((a,b) => a.price > b.price ? -1 : 1)
        setProducts([...newProducts])
      } 
    }

  return (    
    <div className={styles.products}>
      <div className={styles.row}>
        <div className={styles.col__2}>
          <h3>{products && products[0].category.name}</h3>
        </div>
        <div className={styles.col__2}>
          <select onChange={filter}>
            <option defaultValue='def' >Default sorting </option>
            <option value='up'>Sort by price up </option>
            <option value='down'>Sort by price down</option>
          </select>
        </div>
      </div>
        <div className={styles.products__list}>
          {products && products.map(product => <Product key={product.id} {...product}/>)}
        </div>
    </div>  
  )
}

export default Products;