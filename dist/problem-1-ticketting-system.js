"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTicketPrice(age) {
    // write your code here
    return age < 5 ? 0 : age >= 5 && age <= 12 ? 100 : age >= 13 && age <= 59 ? 200 : age >= 60 ? 120 : 0;
}
console.log(getTicketPrice(3)); // 0
console.log(getTicketPrice(10)); // 100
console.log(getTicketPrice(25)); // 200
console.log(getTicketPrice(65)); // 120
//# sourceMappingURL=problem-1-ticketting-system.js.map