//Const is used for Constant Variables(Values cannot be redefined or updated)

const a = 10;
console.log(a)

//But in case of Object its values can be changed

const obj = {
    Name : "Shubh",
    Age : 23
}

console.log(obj)

obj.Name = "Rahul"      //No Error
console.log(obj)


//Error as changing the defination of Variable:

// obj = {
//     Name : "John Doe"  
// }
/******************************************************************* */


//Basic Difference b/w var and let is the way of their defination:

// var is defined globally: Thus when a new var of same name is defined inside a block and is accessd outside it prints acc. to latest declaration

// let is defined Block Wise: The value of defined variable reides in the scope of the Block it is defined


function usingVar()
{
    var a = 10;

    if(10>2)
    {
        var a=23
        console.log(a)
    }
    console.log(a)
}

usingVar() // O/P : 23 23

function usingLet()
{
    let a = 10;

    if(10>2)
    {
        let a=23
        console.log(a)
    }
    console.log(a)
}

usingLet() // O/P : 23 10