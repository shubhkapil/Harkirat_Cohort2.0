// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



let a = 0;

for(let i=1;i<=10;i++)
{
    setTimeout(()=> {console.log(a++)},i*1000)
}




// let a = 0;

// for(let i = 0;i<10;i++)
// {
//     setTimeout(()=> {console.log(a++)},1000);
// }
































































// (Hint: setTimeout)