import { useState, useEffect } from "react";

export default function Home () {
    const [products, setProducts] = useState ([]);

    useEffect (() => {
        fetch ("/api/products")
        .then ((res) => res.json ())
        .then ((data) => setProducts (data));
    }, []);

    return (
        <div>
            <h1>Lista de Productos</h1>
            <ul>
                {products.map ((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
