type Role = "admin" | "editor" | "viewer"


function canEdit(role: Role):boolean {
 
    // write your code here
    return role === "admin" || role === "editor" ? true : false

 
}
console.log(canEdit("admin"));
//true

console.log(canEdit("editor"));
//true

console.log(canEdit("viewer"));
//false

