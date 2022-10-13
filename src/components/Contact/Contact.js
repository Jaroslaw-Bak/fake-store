import styles from './Contact.module.css'

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={(e) => {sendEmail(e)}}>
            
        </form>
    </div>
  )
}

export default Contact;