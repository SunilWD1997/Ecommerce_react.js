import { Link } from 'react-router-dom'
import './card.scss'

const Cards = ({ item }) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className="card">

        <img src={process.env.REACT_APP_IMG_URL + item.attributes.img.data.attributes.url} alt="" className="mainImage" />
        <h3>{item.attributes
          .title}</h3>
        <div className="prices">
          <h4>Rs.{'12'}/-</h4>
          <h4>Rs.{item.attributes
            .price}/-</h4>

        </div>
      </div>
    </Link>
  )
}

export default Cards