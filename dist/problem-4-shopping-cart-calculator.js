"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateCartTotal(products) {
    // write your code here
    return products.reduce((sum, items) => sum + items.price, 0);
}
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
console.log(calculateCartTotal(products));
// 2600
// another example:
const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
console.log(calculateCartTotal(products2));
// 1750
//# sourceMappingURL=problem-4-shopping-cart-calculator.js.map