//reducer 

const nums = [1,2,3]

const total = nums.reduce( function (acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    
    return acc+currVal
},9 )
// console.log(total);

//the same using arrow functions

const myTotal = nums.reduce( (acc, currVal) => (acc+currVal), 0 )
// console.log(myTotal);

//reduce function usage in the real world function -> to add the shopping price of all shopped items

const shoppingCart = [
    {
        itemName: 'v-neck Shirt',
        price: 299
    },
    {
        itemName: 'high waisted pants',
        price: 399
    },
    {
        itemName: 'kaftan dress',
        price: 499
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(totalPrice);

