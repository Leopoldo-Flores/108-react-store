// The product "database" for now. Later it can come from a server.
// prices are NUMBERS (20), not strings ("20"), so we can do math and .toFixed(2)
const catalog = [
    {
        "title": "Chocolatte",
        "category": "Candy",
        "price": 20,
        "image": "choco.png", // file name inside public/images
        "_id": "1" // This should be unique
    },
    {
        "title": "Hoodie",
        "category": "merch",
        "price": 500,
        "image": "hoodie.png",
        "_id": "2"
    },
    {
        "title": "Coffee",
        "category": "merch",
        "price": 20,
        "image": "coffe.png",
        "_id": "3"
    },
];

class DataService {
    // returns the whole product list
    getProducts() {
        return catalog;
    }
}

export default DataService;
