

const catalog = [
    {
        "title":"Chocolatte",
        "category":"Candy",
        "price":20, // CHANGED (Class 1): price is a NUMBER now (no quotes), so we can do math and use .toFixed(2)
        "image":"choco.png",
        "_id": "1" // This should be unique
    },
      {
        "title":"Hoodie",
        "category":"merch",
        "price":500, // CHANGED (Class 1): number, no quotes
        "image":"hoodie.png",
        "_id": "2"
    },
      {
        "title":"Coffee",
        "category":"merch",
        "price":20, // CHANGED (Class 1): number, no quotes
        "image":"coffe.png",
        "_id": "3"
    },
];

class DataService {
    getProducts(){
        return catalog;
    }
}

export default DataService;
