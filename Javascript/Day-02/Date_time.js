//Dates

let currentDate = new Date();

// console.log(currentDate); //output: 2026-01-20T12:48:16.237Z

// console.log(currentDate.toDateString()); //output: Tue Jan 20 2026

// console.log(currentDate.toISOString());//output: 2026-01-20T12:52:24.042Z

// console.log(currentDate.toJSON());//output: 2026-01-20T12:52:24.042Z

// console.log(currentDate.toLocaleDateString());//output: 20/1/2026

// console.log(currentDate.toLocaleString());//20/1/2026, 6:22:24 pm

// console.log(currentDate.toTimeString());//output: 18:22:24 GMT+0530 (India Standard Time)

// console.log(currentDate.toUTCString());//output : Tue, 20 Jan 2026 12:52:24 GMT

// console.log(typeof currentDate);

let myCreatedDate = new Date(2028, 8, 1)
// console.log(myCreatedDate.toDateString());


//Timestamp

// console.log(currentDate.getTime()); //output: 1768914691679 milli seconds from 1 jan 1970 

// console.log(Math.floor(Date.now()/1000)); //1768914751645 milli seconds to seconds by dividing by 1000


// console.log(currentDate.getMonth()+1);

console.log(currentDate.toLocaleString('default', {
    month: '2-digit'
}))





