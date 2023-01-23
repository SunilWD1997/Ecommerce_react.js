import './contact.scss';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaGooglePlusSquare, FaPinterestSquare } from 'react-icons/fa';



const Contact = () => {
    return (
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input type="text" placeholder='Enter Your Email...' />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <FaFacebookSquare className='icon'/>
                    <FaInstagramSquare className='icon'/>
                    <FaTwitterSquare className='icon'/>
                    <FaGooglePlusSquare className='icon'/>
                    <FaPinterestSquare className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Contact