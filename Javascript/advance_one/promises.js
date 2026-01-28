//promises

//creating promises
//method 1:
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 1");
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("task resolved!");
})

//method 2:
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("task 2 is resolved");
})

//accessed data to the user through console

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("data is sent")
        resolve({username: "nagamani", email: "mani@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


//error handling
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = false;
        if(!error){
            resolve({name: "nagamani", email: "mani@example.com"})
        }else{
            reject('error: something went wrrong!')
        }
        
    }, 1000)
})

promiseFour.then(function(user){
    // console.log(user.name)
    return user
}).then( (user) => { //chaining -> avoiding callback hell
    console.log(user.name);
    
} )
.catch(function(){
    console.log("error handled!");
})
.finally( () => console.log("The prmoise is either resolved or rejected")) //finally executes even if the error is present

 
//asyc function to work as same as the then and catch
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        const error = false
        if(!error){
            resolve({lang: "javascript"})
        }else{
            reject("error: JS error")
        }
        
    }, 1000)
})

async function consumePromiseFive(user){
    // console.log(user); -> when error comes it need to be handled with try catch block

    try {
        const response = await promiseFive 
        console.log(response.lang);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//method 1 
// async function userData(){
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: error");
        
//     }
    
// }
// userData()

//another way of fetching the data -> method 2
fetch('https://randomuser.me/api/')
.then( (response) => {
    return response.json()
} )
.then( (data) => {
    console.log(data);
} )
.catch( (error) => {
    console.log(error);
    
} )