//const datefns = require('date-fns')
//console.log(datefns.format(new Date(), "MM/dd/yyyy"))
//console.log("Hello World");

/*let firstName = "Kanlayanuch"
let age = 20

//console.log(firstName + age)

//การใช้ backtick and $
let info = ` 
    My name is ${firstName}
    My Age is ${age}
`
console.log(info)*/
 
//การใช้ object
const user = {
    name: "Kanlayanuch",
    salary: 500000,    
    address: {
        province: "Bangkok",
        postcode: 10220
    }
}

//console.log(user.salary)
//console.log(user.address.postcode)

//การใช้ function
const showData = () => `${user.name}`
//console.log(showData())

const showData2 = () => {
    let info = 'My name is'
    return `${info} ${user.name}` 
}
//console.log(showData2())

const sumNumber = (a,b) => a+b;
// console.log(sumNumber(9,1))

const {name, salary, address: {postcode}} = user
//console.log(name, postcode)

