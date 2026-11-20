import "./Catalog.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import DataService from "../Services/dataService";

function Catalog() {
    const [products, setProducts] = useState([]); // the list of products to show
    const [cart, setCart] = useState([]);         // the items added to the cart

    useEffect(() => {
        // Load the data from the dataService
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    }, []); // The empty array means this runs only once, when the page opens

    function handleAddToCart(item) {
        // spread operator: a NEW array = all the old items + the new one
        // (never cart.push(item): React wouldn't notice the change)
        setCart([...cart, item]);
    }

    return (
        <div>
            <h1>Catalog</h1>
            {/* text-secondary = gray text */}
            <p className="text-secondary">Cart: {cart.length}</p>

            {/* "catalog" = our own class (Catalog.css): cards side by side, wrapping to the next line */}
            <div className="catalog">
                {products.map(prod => <Product key={prod._id} data={prod} onAdd={handleAddToCart} />)}
            </div>
        </div>
    );
}

export default Catalog;
