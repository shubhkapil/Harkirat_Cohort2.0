// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

let fs = require('fs')



fs.readFile('temp.txt','utf-8',(err,data)=> 
{
    if(err) console.log(err)
    
    console.log(data);
})

//Changing Content

// setTimeout(() => fs.writeFile('temp.txt','hey there, I changed Content',(err) => 
// {
//     if(err) 
//         console.log(err)
// }),5000)


//Appending New Value

setTimeout(() => fs.appendFile('temp.txt','Adding Content!!', 
(err)=>
{
    if(err) 
        console.log(err)
}),5000)

setTimeout( () =>
    fs.readFile('temp.txt','utf-8',(err,data)=> 
    {
        if(err) console.log(err)
        
        console.log(data);
    }),7000)

