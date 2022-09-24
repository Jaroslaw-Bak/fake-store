import styles from './Footer.module.css'
import facebook from '../..//assets/facebook.png'
import instagram from '../..//assets/instagram.png'
import youtube from '../..//assets/youtube.png'
import twitter from '../..//assets/twitter.png'

function Footer() {
  return (
      <div className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.col__2}>
            <h3 className={styles.title}>Follow us</h3>
            <div className={styles.socials}>
              <img className={styles.socials__element}src={facebook}  alt='facebook '/>
              <img className={styles.socials__element}src={instagram}  alt='instagram '/>
              <img className={styles.socials__element}src={twitter}  alt='twitter '/>
              <img className={styles.socials__element}src={youtube}  alt='youtube '/>            
            </div>
          </div>
          <div className={styles.col__2}>
            <h3 className={styles.title}>Others</h3>
            <div>
              <p>About</p>
              <p>Contact us</p>
              <p>Help</p>
              <p>Feedback</p>
            </div>
          </div>

        </div>
        <p>Copyright 2022</p>
      </div>
    
  )
}

export default Footer