import { MdDeleteOutline } from 'react-icons/md'
import './cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../redux/cartReducer'
import { resetCart } from '../../redux/cartReducer'

const Cart = () => {
  const dispatch = useDispatch()
const products = useSelector((state)=>state.cart.products)
console.log(products);

const subTotal = ()=>{
  let total = 0;
  products.forEach(item => {
      return total = total + item.quantity * item.price
  });
  return total;
}
  return (
    <div className="cart_item">
      <h2>Products in your cart</h2>

      {products.map((item) => {
        return <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_IMG_URL + item.img} alt="" />
          <div className="details">
            <h3>{item.title}</h3>
            <p>{item?.desc?.subString( 50)}</p>
            <div className="price">{item.quantity} x Rs. {item.price.toFixed(2)}/-</div>
          </div>
          < MdDeleteOutline className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      })}

      <div className="total">
        <span>SUBTOTAL</span>
        <span className='rupee'>Rs. {subTotal().toFixed(2)}/-</span>
      </div>
       <button onClick={()=>alert('Sorry page is not created')}>PROCEED TO CHECKOUT</button>
       <span className='reset' onClick={()=>{dispatch(resetCart())}}>Reset Cart</span>
    </div>
  )
}

export default Cart;







// const data = [{
//   id: 1,
//   img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
//   title: "Hat",
//   desc: 'Hello sir how are you , are you good or what do you do bro i just got a call from a consultancy',
//   isNew: true,
//   oldPrice: 19,
//   price: 12
// }, {
//   id: 2,
//   img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
//   title: "Coat",
//   desc: 'Hello sir how are you , are you good or what do you do bro i just got a call from a consultancy',
//   isNew: true,
//   oldPrice: 19,
//   price: 12
// }]
