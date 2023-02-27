import './styles/features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faDolly, faShirt, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const features = [
    {
        id: 1,
        title: 'Original Products',
        body: 'we provide money back guarantee if the product not original',
        icon: faBox
    },
    {
        id: 2,
        title: 'Satisfaction Guarantee',
        body: "Exchange the product you'vh purchased if it doesn't fit on you",
        icon: faShirt
    },
    {
        id: 3,
        title: 'New Arrival Everyday',
        body: 'we updates our collection almost everyday',
        icon: faDolly
    },
    {
        id: 4,
        title: 'Fast & Free Shipping',
        body: 'we offer fast and free shipping for our loyal customers',
        icon: faTruckFast
    }
]

function Features () {
    return (
        <section className="features">
            <header className='header'>
                <h1>
                    We provide best customer experiences
                </h1>
            </header>
            <section className='features-container'>
                {
                    features.map(e => {
                        return (
                            <article className='feature' key={e.id}>
                                <FontAwesomeIcon icon={e.icon} />
                                <header>
                                    <h2>{e.title}</h2>
                                </header>
                                <p>{e.body}</p>
                            </article>
                        );
                    })
                }
            </section>
        </section>
    )
}

export default Features;