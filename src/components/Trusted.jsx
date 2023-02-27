import './styles/trusted.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Trusted () {
    return (
        <section className="trusted">
            <header className='header'>
                <h1>
                    Trusted by over 350,000+ clients worldwide since 2008
                </h1>
            </header>
            <section className='rate'>
                <section className='rating'>
                    <p>4.6</p>
                    <section className='stars'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </section>
                    <p>3,350 rating</p>
                </section>
                    <section className='rating'>
                        <p>6M+</p>
                        <p>Worldwide Product sale per year</p>
                    </section>
            </section>
        </section>
    )
}

export default Trusted;