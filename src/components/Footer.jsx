import './styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Footer () {
    return (
        <footer className="footer">
            <section className='logo'>
                <FontAwesomeIcon icon={faStore} size='xl' />
                <p>Store</p>
            </section>
            <ul className='list'>
                <li><a href="/">home</a></li>
                <li><a href="#electronics">electronics</a></li>
                <li><a href="#jewelery">jewelery</a></li>
                <li><a href="#men's clothing">men's clothing</a></li>
                <li><a href="#women's clothing">women's clothing</a></li>
            </ul>
            <p>&copy; copyright 2022 - <a href="https://twitter.com/d7mii_b">Abdulrahman</a></p>
        </footer>
    )
}

export default Footer;