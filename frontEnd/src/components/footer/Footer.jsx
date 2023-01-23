import './Footer.scss';


const Footer = () => {
  return (
    <div className="footer">

      <div className="top">
        <div className="item">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit  vitae obcaecati exercitationem sapiente, non corrupti? Atque suscipit animi aliquid quae?</p>
        </div>

        <div className="item">
          <h2>Contact</h2>
          <p>Lorem ipsum dolor sit,  repellendus perferendis corporis optio culpa rem quis architecto! Veritatis numquam maiores dolores reprehenderit nihil quas? Quibusdam!</p>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className='logo'>MyStore</span>
          <span className='copyright'>© Copyright 2023. All Rights Reserved</span>
        </div>

        <div className="right">
          <img src="/images/payment.jpg" alt="" style={{ width: '15rem' }} />
        </div>
      </div>
    </div>
  )
}

export default Footer