import styles from './Home.module.css'
import img from '../../assets/peopleshoping.png'
import clothes from '../../assets/clothes.jpg'
import electronics from '../../assets/electronics.jpg'
import shoes from '../../assets/shoes.jpg'
import featured1 from '../../assets/featured1.jpg'
import featured2 from '../../assets/featured2.jpg'
import featured3 from '../../assets/featured3.jpg'
import featured4 from '../../assets/featured4.jpg'
import comentIcon from '../../assets/comment.png'
import profile from '../../assets/profile.jpg'
import logo from '../../assets/logo3.png'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.background}>
        <div className={styles.row}>
          <div className={styles.col__2}>
            <h1>Change Your Home <br/> with you products</h1>
            <buttton className={styles.btn}>Explore Now  &#10141;</buttton>
          </div>
          <div className={styles.col__2}>
            <img src={img} />
          </div>
        </div>
      </div>
      <div className={styles.categories}>
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
      </div>

      <div className={styles.featured}>
        <div className={styles.small__container}>
            <div className={styles.title}>
              <h2>Featured Products</h2>
            </div>
          <div className={styles.row}>
            <div className={styles.col__4}>
              <img src={featured1} alt='#' />
              <h4>"Rustic Rubber Shirt</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={featured2} alt='#' />
              <h4>watch</h4>
              <p>$100</p>
            </div>
            <div className={styles.col__4}>
              <img src={featured3} alt='#' />
              <h4>Generic Soft Chair</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={featured4} alt='#' />
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
              <img src={featured1} alt='#' />
              <h4>"Rustic Rubber Shirt</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={featured2} alt='#' />
              <h4>watch</h4>
              <p>$100</p>
            </div>
            <div className={styles.col__4}>
              <img src={featured3} alt='#' />
              <h4>Generic Soft Chair</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={featured4} alt='#' />
              <h4>Awesome Frozen Shoes</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={featured1} alt='#' />
              <h4>"Rustic Rubber Shirt</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={featured2} alt='#' />
              <h4>watch</h4>
              <p>$100</p>
            </div>
            <div className={styles.col__4}>
              <img src={featured3} alt='#' />
              <h4>Generic Soft Chair</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={featured4} alt='#' />
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
                  <img src={comentIcon} />
                </div>
                <p className={styles.opinion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                <div className={styles.profile}>
                  <img src={profile} alt='profilePicture' />
                </div>
                <h3>Imię Nazwisko</h3>
            </div>
            <div className={styles.col__3}>
                <div className={styles.icon}>
                  <img src={comentIcon} />
                </div>
                <p className={styles.opinion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                <div className={styles.profile}>
                  <img src={profile} alt='profilePicture' />
                </div>
                <h3>Imię Nazwisko</h3>
            </div>
            <div className={styles.col__3}>
                <div className={styles.icon}>
                  <img src={comentIcon} />
                </div>
                <p className={styles.opinion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                <div className={styles.profile}>
                  <img src={profile} alt='profilePicture' />
                </div>
                <h3>Imię Nazwisko</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;