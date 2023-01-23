import "./Navbar.scss";
import { MdFavoriteBorder } from 'react-icons/md';
import { FiChevronDown } from 'react-icons/fi';
import { GrCart, GrSearch } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";







const Navbar = () => {
    const products = useSelector((state) => state.cart.products)
    console.log(products);
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="wrapper">

                <div className="left">

                    <div className="item" onClick={()=>alert('sorry this page is not created')} style={{cursor: 'pointer'}}>
                        <img src="/images/ind.png" alt="" style={{ width: '1.8rem' }} />
                        <FiChevronDown />
                    </div>

                    <div className="item" onClick={()=>alert('sorry this page is not created')} style={{cursor: 'pointer'}}>
                        <span>IND</span>
                        <FiChevronDown />
                    </div>

                    <div className="item">
                        <Link className='link' to='/products/1'>Women</Link>
                    </div>

                    <div className="item">
                        <Link className='link' to='/products/2'>Men</Link>
                    </div>

                    <div className="item">
                        <Link className='link' to='/products/3'>Children</Link>
                    </div>

                </div>

                <div className="center">
                    <Link className='link' to="/">MyStore</Link>
                </div>

                <div className="right">
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' onClick={()=>alert('sorry this page is not created')}>About</Link>
                    <Link className='link' to="/contact">Contact</Link>
                    <Link className='link' to="/products/2">Stores</Link>

                    <div className="icons">
                        <div className="item">
                            <Link className='link' to="/" onClick={()=>alert('sorry this component is not created')}><GrSearch /></Link>
                        </div>
                        <div className="item">
                            <Link className='link' to="/" onClick={()=>alert('sorry this component is not created')}><BsPerson /></Link>
                        </div>
                        <div className="item">
                            <Link className='link' to="/" onClick={()=>alert('sorry this component is not created')}><MdFavoriteBorder /></Link>
                        </div>


                        <div className="cart" onClick={() => setOpen(!open)} style={{cursor: 'pointer'}}>
                            <GrCart className='link' />
                            <span>{products.length}</span>
                        </div>

                    </div>

                </div>

            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar