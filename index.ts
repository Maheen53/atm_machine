#! /usr/bin/env node
import inquirer from "inquirer"


let mybalance = 10000;
let myPin =1234;

let pinAnswer = await inquirer.prompt(
    [
        {
           name:"pin",
           message:"enter your pin",
           type:"number", 
        }
    ]
);
if  (pinAnswer.pin === myPin ){
    console.log("correct pincode !!!");

let operationAns = await    inquirer.prompt(
        [
           {
            name:"opearation",
            message:"please select option",
            type:"list",
            choices:["withdraw","checkbalance","fastcash"]
           } 
        ]
    )
    //console.log(operationAns);
if (operationAns.opearation === "withdraw" )  {
    let amountAns = await inquirer.prompt(
        [
            {
                name:"amount",
                message:"enter your amount you want to withdraw",
                 type: "number",

            }
        ]
    );
// = ,-= , += // assigment operators
  if (amountAns.amount.amount < mybalance){
    mybalance -= amountAns.amount

    console.log("your remaining balance is:" + mybalance)
  }else{
    console.log("insufficient balance")
  }

}else if (operationAns.opearation === "checkbalance"){
    console.log("your current balance is" + mybalance)
  }
  else if (operationAns.opearation === "fastcash"){
     let fastcash = await inquirer.prompt(
        [
            {
                name:"fastcash",
                message:"how money you want to fastcash",
                type:"list",
                choices:["1000","2000","3000"],
                
            }
        ]
     );  
 if (fastcash.fastcash === "3000")
  mybalance = mybalance ,fastcash.fastcash
console.log(`your remainig balance is ${mybalance}`);
    }
}       
else {
    console.log("incorrect pin number");
}
//atm machine