interface Product {
    name:string;
    price:number;
    category:string
}


function findProducts(products: Product[], category:string):Product[] {
 
    // write your code here
    const filterCategory = products.filter((item) => item.category === category);
    return filterCategory;
 
}
const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
];
 
console.log(findProducts(products, "phone"));;
// returns the iPhone 15 and Galaxy S24 objects

console.log(findProducts(products, "laptop"));
// returns the two laptop products
