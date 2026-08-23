type Transaction = {
    type:"deposit" | "withdraw";
    amount:number
}

function processTransaction(balance:number, transaction: Transaction):number | string  {
 
    // write your code here
    if(transaction.type === "deposit"){
        return balance + transaction.amount;
    }else if(transaction.type === "withdraw"){
        if(transaction.amount > balance){
            return "insaficient balance please try to again"
        }
    }
    return balance - transaction.amount
 
}
// console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));

console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));

// console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));