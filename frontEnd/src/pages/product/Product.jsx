import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './product.scss'
import { MdAddShoppingCart, MdOutlineFavoriteBorder } from 'react-icons/md';
import { FaBalanceScale } from 'react-icons/fa';
import { HiPlus, HiMinus } from 'react-icons/hi';
import useFetch from '../../components/hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';



const Product = () => {
  const dispatch = useDispatch();

  const id = parseInt(useParams().id);
 
  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);


  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

console.log(data)
 

return (
    <div className="product">

      <div className="left">
        <div className="images">

          <img src={process.env.REACT_APP_IMG_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img")} />
          <img src={process.env.REACT_APP_IMG_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img2")} />


        </div>
        <div className="main_image">
          <img src={process.env.REACT_APP_IMG_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />

        </div>
      </div>

      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>Rs.{data?.attributes?.price}/-</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti laboriosam atque, repellat quod fuga alias tenetur error ducimus doloribus nobis fugiat consequuntur ea distinctio ad temporibus. Necessitatibus obcaecati nostrum iste distinctio eum ducimus ab! </p>

        <div className="quantity">
          <button onClick={() => { setQuantity(quantity === 1 ? 1 : quantity - 1) }}><HiMinus /></button>
          {quantity}
          <button onClick={() => { setQuantity(quantity + 1) }}><HiPlus /></button>
        </div>
        <button onClick={()=>dispatch(addToCart({
          id: data.id,
          price: data.attributes.price,
          title: data.attributes.title,
          img: data.attributes.img.data.attributes.url,
          quantity
        }))} ><MdAddShoppingCart /> ADD TO CART</button>

        <div className="link">
          <div className="item"><MdOutlineFavoriteBorder /> ADD TO WISHLIST</div>
          <div className="item"><FaBalanceScale /> ADD TO COMPARE</div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>

    </div>
  
  )
}

export default Product