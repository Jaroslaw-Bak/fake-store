import styles from './Contact.module.css'
import { useState } from 'react'

const Contact = () => {

    const [ name, setName] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('')
        setMessage('')
        setEmail('')
    }
    
  return (
    <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.contactInfo}>
            <label for='name'>
              <input value={name}type='text' name='name'id='name'placeholder='Name'onChange={(e) => setName(e.target.value) }></input> 
            </label>
            <label for='email'>
              <input value={email} type='email' name='email' id='email'placeholder='Email' onChange={ e => setEmail(e.target.value)}></input> 
            </label>
          </div>
          <label for='message'>
            <textarea value={message} placeholder='Message'name='message' id='message' onChange={e => setMessage(e.target.value)}></textarea>
          </label>
          <button type='submit' onClick={handleSubmit}>Submit</button>          
        </form>
    </div>
  )
}

export default Contact;