// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

let fs = require('fs');

console.log(10);

fs.readFile("temp.txt","utf-8",(err,data) =>
{
    if(err) console.log(err)

    console.log(data);
})


let a = 0;
for(let i = 0 ;i<100;i++)
    a+=i

console.log(a)