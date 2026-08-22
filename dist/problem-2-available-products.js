"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStockStatus(stock) {
    // write your code here
    return stock === 0
        ? "Out of Stock"
        : stock >= 1 && stock <= 5
            ? "Almost Sold Out"
            : stock >= 6 && stock <= 20
                ? "Available"
                : "IN Stock";
}
console.log(getStockStatus(0)); // Out of Stock
console.log(getStockStatus(3)); // Almost Sold Out
console.log(getStockStatus(12)); // Available
console.log(getStockStatus(50)); // In Stock
// Boundary values
console.log(getStockStatus(5)); // Almost Sold Out
console.log(getStockStatus(6)); // Available
console.log(getStockStatus(20)); // Available
console.log(getStockStatus(21)); // In Stock
//# sourceMappingURL=problem-2-available-products.js.map