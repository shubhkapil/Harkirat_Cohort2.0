

//1. Simple Printing In js
firstname = "Harkirat"
age = 18
isMarried = true

console.log("The name is:" + firstname + " age: " + age + " isMarried: " + isMarried)


//2. Data types in JS - let vs const vs var(least used)

let a = 10
console.log(a)
a="shubh"
console.log(a)

const b = "shubh"
console.log(b)
//error
b = 10
console.long(b)

//3. Basic If Else in JS

if(isMarried)
{
        console.log(firstname + "is Married")
}
else
{
    console.log(firstname + "is Not Married")
}
    
//4. Basic loops in JS
    
for(let i=0;i<=5;i++)
    console.log("Bhupendra Jogi")

let ans = 100

for(let i=0;i<1000000;i++)
    ans+=i
console.log(ans)

    
//Infinite loop    
while(1)
{
    console.log("Naam batao: ")
    console.log("Bupendrajogi")
}


//Basic Array in JS

let arr = [0,1,2,3,4,5,67,8,8,9,3,34]

//values at even position
console.log("Values at even positions: ")
for(let i = 0;i<arr.length;i+=2)
    console.log(arr[i])
    
//Even values of Array
console.log("Values that are even")
for(let i=0;i<arr.length;i++)
{
    if(a[i]%2==0)
        console.log(arr[i]);
}

//max value of a array
let maxi = arr[0]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>maxi)
        maxi=a[i]
}
console.log("Max Value of Array: " + maxi)




//Objects in JS
const personArray = ["abc","bdf","fdj"]
const genderArray = ['m','m','f']

for(let i=0;i<genderArray.length;i++)
{
    if(genderArray[i]=='m')
        console.log(personArray[i])
}


const arrayOfObjects = [
    {
        firstName : "abc",
        gender : "m"
    },
    {
        firstName : "sds",
        gender : "m"
    },
    {
        firstName : "abc",
        gender: "f"
    }]
    
for(let i = 0;i<arrayOfObjects.length;i++)
{
    if(arrayOfObjects[i]["gender"] == 'm')
        console.log(arrayOfObjects[i]["firstName"])
}

