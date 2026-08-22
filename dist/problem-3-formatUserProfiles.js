"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatUserProfile(user) {
    // write your code here
    return `${user.name} is ${user.age} years old and lives in ${user.city}`;
}
;
const user = {
    name: "Fahim",
    age: 22,
    city: "Dhaka"
};
console.log(formatUserProfile(user));
//# sourceMappingURL=problem-3-formatUserProfiles.js.map