import './styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar () {
    return (
        <nav className="navbar">
            <section className='logo'>
                <FontAwesomeIcon icon={faStore} size='xl' />
                <p>Store</p>
            </section>
            <section className='list-section'>
                <FontAwesomeIcon icon={faBars} size='xl' className='bar' />
                <ul className='list'>
                    <li><a href="/">home</a></li>
                    <li><a href="#electronics">electronics</a></li>
                    <li><a href="#jewelery">jewelery</a></li>
                    <li><a href="#men's clothing">men's clothing</a></li>
                    <li><a href="#women's clothing">women's clothing</a></li>
                </ul>
            </section>
            <section className='user-cart'>
                <p><FontAwesomeIcon icon={faCartShopping} size='xl' /></p>
            </section>
        </nav>
    )
} 

export default Navbar;