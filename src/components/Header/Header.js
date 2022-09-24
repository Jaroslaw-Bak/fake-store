
import { useContext } from 'react'
import { DataContext } from '../../DataContext' 
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo3.png'
import profile from '../../assets/profile.png'
import favorite from '../../assets/favorite.png'
import cart from '../../assets/cart.png'

const Header = () => {
    const { changeCategory } = useContext(DataContext)

    return (
        <div className={styles.header}>
            <div className={styles.baner}>
                DARMOWA DOSTAWA POWYŻEJ 100 ZŁ
            </div>
            <div className={styles.navigation}>
                <Link to='/'><img src={logo} className={styles.logo} alt='logo' /></Link>
                <div className={styles.categories}>
                    <ul className={styles.categories__list}>
                        <li className={styles.categories__list__item} 
                            onClick={() => changeCategory('Clothes')}>
                            <Link to='/Clothes' className={styles.link}>CLOTHES</Link>
                        </li>
                        <li className={styles.categories__list__item}
                            onClick={() => changeCategory('Electronics')}> 
                            <Link to='/Electronics' className={styles.link}>ELECTRONICS</Link>
                        </li>
                        <li className={styles.categories__list__item}
                            onClick={() => changeCategory('Furniture')}> 
                            <Link to='/Furniture' className={styles.link}>FURNITURE</Link>
                        </li>
                        <li className={styles.categories__list__item}
                            onClick={() => changeCategory('Shoes')}>
                            <Link to='/Shoes'className={styles.link} >SHOES</Link>
                        </li>
                        <li className={styles.categories__list__item} 
                            onClick={() => changeCategory('Others')}> 
                            <Link to='/Others' className={styles.link}>OTHERS</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.icons}>
                    <div className={styles.icons__profile}>
                        <img src={profile} className={styles.icons__profile__item} alt='profile' />
                        <img src={favorite} className={styles.icons__profile__item} alt='favorite' />
                        <Link to='/Cart'><img src={cart} className={styles.icons__profile__item} alt='cart'/></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;