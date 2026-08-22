"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canEdit(role) {
    // write your code here
    return role === "admin" || role === "editor" ? true : false;
}
console.log(canEdit("admin"));
//true
console.log(canEdit("editor"));
//true
console.log(canEdit("viewer"));
//false
//# sourceMappingURL=problem-6-role-based-permission.js.map