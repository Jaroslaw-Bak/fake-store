import styles from './Products.module.css'
import Product from "../Product/Product"
import axiosDataContext from '../../axiosDataContext'
import { DataContext } from '../../DataContext'
import { useContext } from 'react'


const Products = () => {
    const allProductsData = useContext(axiosDataContext);
    const {category} = useContext(DataContext);   
    
    const categoryProducts = allProductsData && allProductsData.filter(product => {
      return product.category.name === category
    })

  return (    
    <div className={styles.products}>
      <div className={styles.row}>
        <div className={styles.col__2}>
          <h3>{category}</h3>
        </div>
        <div className={styles.col__2}>
          <select>
            <option>Default sorting </option>
            <option>Sort by price up </option>
            <option>Sort by price down</option>
          </select>
        </div>
      </div>
        <div className={styles.products__list}>
          {categoryProducts ? categoryProducts.map(product => <Product key={product.id} {...product}/>) : <p>loading</p>}
        </div>
    </div>  
  )
}

export default Products;