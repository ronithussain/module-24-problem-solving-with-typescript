function formatUserProfile(user: User):string {
 
    // write your code here
    return `${user.name} is ${user.age} years old and lives in ${user.city}`
 
}

interface User {
    name:string;
    age:number;
    city:string;
};

const user:User = {
    name: "Fahim",
    age: 22,
    city: "Dhaka"
}
console.log(formatUserProfile(user));
