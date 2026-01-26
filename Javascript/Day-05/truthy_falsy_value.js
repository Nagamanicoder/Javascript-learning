// const userEmail = "mani@ai.com" //treated as true
// const userEmail = "" //treated as false value 
const userEmail = [] //treated as true

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Didnt get user email");
}

//important conditions
if(false == 0) console.log("true");

if(falsse == '') console.log("true");

if(0 == '') console.log("true");



// ******************************************** Truthy and Falsy values  *********************************************
//falsy values
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy values 
// "0", 'false', " ", [], {}, function(){} -> empty function 
