import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'
import './styles/products.css'

function Products (props) {
    const [products, setProducts] = useState(null);

    const getCategories = () => {
        fetch(`https://fakestoreapi.com/products/category/${props.category}`)
        .then(result => result.json())
        .then(data => setProducts(data))
    }

    useEffect(() => {
        getCategories();
    }, [products])

    return (
        <article className="products-container" id={props.category}>
            <header className="header">
                <h1>{props.category}</h1>
            </header>
            <section className="products">
                {
                    products && 
                    products.filter((e, i, arr) => i < 4).map(e => {
                        return (
                            <article className="product" key={e.id} >
                                <section className="image">
                                    <img src={e.image} alt="" />
                                </section>
                                <header>
                                    <h5 className="title">{e.title}</h5>
                                </header>
                                <section className="info-cart">
                                    <section className="add-cart">
                                        <FontAwesomeIcon icon={faCartShopping} size='lg' />
                                    </section>
                                    <section className="rate">
                                        <p>{e.price} $</p>
                                        <p>
                                            <FontAwesomeIcon icon={faStar} /> 
                                            {e.rating.rate} | {e.rating.count}
                                        </p>
                                    </section>
                                </section>
                            </article>
                        )
                    })
                }
            </section>
        </article>
    )
}

export default Products;