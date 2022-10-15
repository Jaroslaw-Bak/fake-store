import styles from './Home.module.css'
import img from '../../assets/1logo.png'
import { Link } from 'react-router-dom'
import featured1 from '../../assets/featured1.jpg'
import featured2 from '../../assets/featured2.jpg'
import featured3 from '../../assets/featured3.jpg'
import featured4 from '../../assets/featured4.jpg'
import comentIcon from '../../assets/comment.png'
import profile from '../../assets/profile.jpg'
import profile2 from '../../assets/profile2.jpg'
import profile3 from '../../assets/profile3.jpg'
import new1 from '../../assets/new1.jpg'
import new2 from '../../assets/new2.jpg'
import new3 from '../../assets/new3.jpg'
import new4 from '../../assets/new4.jpg'
import new5 from '../../assets/new5.jpg'
import new6 from '../../assets/new6.jpg'
import new7 from '../../assets/new7.jpg'
import new8 from '../../assets/new8.jpg'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.background}>
        <div className={styles.row}>
          <div className={styles.col__2}>
           <div className={styles.col__2__margin}>
            <div>
              <h1>Change Your Home <br/> with our products</h1>
              <p>Lorem Ipsum is simply dummy text<br /> of the printing and typesetting</p>
              <Link to='/Clothes'>
                <button className={styles.btn}>Explore Now  &#10141;</button>
              </Link>
            </div>
           </div>
           
          </div>
          <div className={styles.col__2}>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
      {/* <div className={styles.categories}>
        <div className={styles.small__container}>
          <div className={styles.row}>
            <div className={styles.col__3}>
              <img src={clothes} alt='clothes'/>
            </div>
            <div className={styles.col__3}>
              <img src={electronics} alt='electronic' />
            </div>
            <div className={styles.col__3}>
              <img src={shoes} alt='shoes'/>
            </div>
          </div>
        </div>      
      </div> */}

      <div className={styles.featured}>
        <div className={styles.small__container}>
            <div className={styles.title}>
              <h2>Featured Products</h2>
            </div>
          <div className={styles.row}>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/65'>                
                <img src={featured1} alt='#' />
              </Link>
              <h4>"Rustic Rubber Shirt</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/132'>    
                <img src={featured2} alt='#' />
              </Link>
              <h4>watch</h4>
              <p>$100</p>
            </div>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/156'>    
                <img src={featured3} alt='#' />
              </Link>
              <h4>Generic Soft Chair</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/155'>    
                <img src={featured4} alt='#' />
              </Link>
              <h4>Awesome Frozen Shoes</h4>
              <p>$250</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.featured}>
        <div className={styles.small__container}>
            <div className={styles.title}>
              <h2>New Products</h2>
            </div>
          <div className={styles.row}>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/125'>    
                <img src={new1} alt='#' />
              </Link>
              <h4>"Rustic Rubber Shirt</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/132'>    
                <img src={new2} alt='#' />
              </Link>
              <h4>watch</h4>
              <p>$100</p>
            </div>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/125'>    
                <img src={new3} alt='#' />
              </Link>
              <h4>Generic Soft Chair</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/132'>    
                <img src={new4} alt='#' />
              </Link>
              <h4>Awesome Frozen Shoes</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/135'>    
                <img src={new5} alt='#' />
              </Link>
              <h4>"Rustic Rubber Shirt</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/147'>    
                <img src={new6} alt='#' />
              </Link>
              <h4>watch</h4>
              <p>$100</p>
            </div>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/151'>    
                <img src={new7} alt='#' />
              </Link>
              <h4>Generic Soft Chair</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <Link to='/SingleProduct/144'>    
                <img src={new8} alt='#' />
              </Link>
              <h4>Awesome Frozen Shoes</h4>
              <p>$250</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.opinions}>
        <div className={styles.small__container}>
          <div className={styles.row}>
            <div className={styles.col__3}>
                <div className={styles.icon}>
                  <img src={comentIcon} alt=''/>
                </div>
                <p className={styles.opinion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                <div className={styles.profile}>
                  <img src={profile} alt='profilePicture' alt=''/>
                </div>
                <h3>Inna Hailie </h3>
            </div>
            <div className={styles.col__3}>
                <div className={styles.icon}>
                  <img src={comentIcon} alt=''/>
                </div>
                <p className={styles.opinion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                <div className={styles.profile}>
                  <img src={profile2} alt='profilePicture' />
                </div>
                <h3>Joschka Sunny</h3>
            </div>
            <div className={styles.col__3}>
                <div className={styles.icon}>
                  <img src={comentIcon} alt='' />
                </div>
                <p className={styles.opinion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                <div className={styles.profile}>
                  <img src={profile3} alt='profilePicture' />
                </div>
                <h3>Raghu Garen</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;