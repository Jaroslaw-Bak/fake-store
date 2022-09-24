import styles from './Searchbar.module.css'
import searchButton from '../../assets/searchButton.png'

function Searchbar() {
  return (
    <div className={styles.searchbar}>
        <input type="search"  className={styles.searchbar__input} placeholder='Search' />
        <button className={styles.searchbar__button}>
            <img src={searchButton} className={styles.searchbar__searchButton} alt='searchButton' />
        </button>
    </div>
  )
}

export default Searchbar