import styles from './Home.module.css'
import img from '../../assets/1logo.png'
import clothes from '../../assets/clothes.jpg'
import electronics from '../../assets/electronics.jpg'
import shoes from '../../assets/shoes.jpg'
import featured1 from '../../assets/featured1.jpg'
import featured2 from '../../assets/featured2.jpg'
import featured3 from '../../assets/featured3.jpg'
import featured4 from '../../assets/featured4.jpg'
import comentIcon from '../../assets/comment.png'
import profile from '../../assets/profile.jpg'
import profile2 from '../../assets/profile2.jpg'
import profile3 from '../../assets/profile3.jpg'
import logo from '../../assets/logo3.png'
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
              <p>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting</p>
              <button className={styles.btn}>Explore Now  &#10141;</button>
            </div>
           </div>
           
          </div>
          <div className={styles.col__2}>
            <img src={img} />
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
              <img src={new1} alt='#' />
              <h4>"Rustic Rubber Shirt</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={new2} alt='#' />
              <h4>watch</h4>
              <p>$100</p>
            </div>
            <div className={styles.col__4}>
              <img src={new3} alt='#' />
              <h4>Generic Soft Chair</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={new4} alt='#' />
              <h4>Awesome Frozen Shoes</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={new5} alt='#' />
              <h4>"Rustic Rubber Shirt</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={new6} alt='#' />
              <h4>watch</h4>
              <p>$100</p>
            </div>
            <div className={styles.col__4}>
              <img src={new7} alt='#' />
              <h4>Generic Soft Chair</h4>
              <p>$250</p>
            </div>
            <div className={styles.col__4}>
              <img src={new8} alt='#' />
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
                <h3>Inna Hailie </h3>
            </div>
            <div className={styles.col__3}>
                <div className={styles.icon}>
                  <img src={comentIcon} />
                </div>
                <p className={styles.opinion}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                <div className={styles.profile}>
                  <img src={profile2} alt='profilePicture' />
                </div>
                <h3>Joschka Sunny</h3>
            </div>
            <div className={styles.col__3}>
                <div className={styles.icon}>
                  <img src={comentIcon} />
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