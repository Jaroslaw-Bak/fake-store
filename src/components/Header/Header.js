
import { useContext, useState } from 'react'
import { DataContext } from '../../DataContext' 
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo3.png'
import profile from '../../assets/profile.png'
import favorite from '../../assets/favorite.png'
import cart from '../../assets/cart.png'
import menu from '../../assets/menu.png'

const Header = () => {
    const { changeCategory } = useContext(DataContext)

    const [ isActive, setActive] = useState(true)
    const toggleMenu = () => {
        setActive(!isActive)
    }

    return (
        <div className={styles.header}>
            <div className={styles.baner}>
                DARMOWA DOSTAWA POWYŻEJ 100 ZŁ
            </div>
            <div className={styles.navigation}>
                <Link to='/'><img src={logo} className={styles.logo} alt='logo' /></Link>
                <div className={styles.categories} onClick={()=> {setActive(true)}}>
                    <ul className={`${styles.categories__list} + ${isActive && styles.categories__list__off}`}>
                        <li onClick={() => changeCategory('1')}>
                            <Link to='/Clothes' >CLOTHES</Link>
                        </li>
                        <li onClick={() => changeCategory('2')}> 
                            <Link to='/Electronics' >ELECTRONICS</Link>
                        </li>
                        <li onClick={() => changeCategory('3')}> 
                            <Link to='/Furniture' >FURNITURE</Link>
                        </li>
                        <li onClick={() => changeCategory('4')}>
                            <Link to='/Shoes'  >SHOES</Link>
                        </li>
                        <li onClick={() => changeCategory('5')}> 
                            <Link to='/Others' >OTHERS</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.icons}>
                    <div className={styles.icons__profile}>
                        <img src={profile} alt='profile' />
                        <Link to='/Cart'><img src={cart} alt='cart'/></Link>
                        <img src={menu} className={styles.icons__profile__menu} onClick={toggleMenu} />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;