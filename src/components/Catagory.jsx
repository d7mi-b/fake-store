import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import './styles/catagory.css'

function Catagory (props) {
    const [catagory, setCatagory] = useState(null);

    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(result => result.json())
        .then(data => setCatagory(data))
    }

    useEffect(() => {
        getCategories();
    }, [catagory])

    return (
        <article className="categories-container" id={props.category}>
            <section className="categories">
                {
                    catagory && 
                    catagory.filter((e, i, arr) => i < 4).map(e => {
                        return (
                            <article className="catagory" key={e} >
                                <header>
                                    <h5 className="title">Shop for {e}</h5>
                                </header>
                                <section className="info-cart">
                                    <section className="right-arrow">
                                        <a href={`#${e}`}>
                                            <FontAwesomeIcon icon={faRightLong} size='xl' />
                                        </a>
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

export default Catagory;