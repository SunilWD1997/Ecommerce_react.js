import './contact.scss'


const ContactPage = () => {
  return (
    <div className="contact_page">

      <h2>Contact us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17801.610871082292!2d85.80343582542149!3d20.28669901330062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d626fffc1d%3A0xe19f5ac0b78f8e62!2sNayapalli%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1671418554520!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>

      <form action="https://formspree.io/f/xzbqpekz" method='POST' className='user_form'>
        <input type="text" placeholder='Enter your name' name='username' required autoComplete='off' />
        <input type="email" placeholder='Enter your email' name='Email' required autoComplete='off' />
        <textarea name="Message" cols="20" rows="10" placeholder='Enter your message'></textarea>
        <button type='submit' >Send</button>
      </form>
    </div>
  )
}

export default ContactPage