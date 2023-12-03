//Function to find sum

function findSum(a,b)
{
    return a+b
}

console.log(findSum(1,3))


//Call Back Functions
function sum(a,b,type)
{
    result = a+b
    type(result)
}

function display1(data)
{
    console.log("The data is: " + data)
}

function display2(data)
{
    console.log(data + " is the Data")
}

sum(1,5,display1)
sum(1,5,display2)

//setTimeout & setIteration

function show()
{
    console.log("Hi, I am Shabh Kapil")
}

setTimeout(show,1*1000)
setInterval(show,3*1000)

