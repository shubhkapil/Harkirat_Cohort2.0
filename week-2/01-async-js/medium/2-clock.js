// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let D = new Date()

let hr = D.getHours();
let min = D.getMinutes();
let sec = D.getSeconds();



// let interval = setInterval(()=> 
// {
//     console.log(hr+":"+min+":"+sec);
//     sec+=1;

//     if(sec==60)
//     {
//         sec = 0;
//         min += 1;
//     }
//     if(min==60)
//     {
//         min = 0;
//         hr += 1;
//     }

    
//     if(min==21)
//         clearInterval(interval);
// },1000)

for(let i = 1;i<=60;i++)
{
    setTimeout(()=>
    {
    console.log(hr+":"+min+":"+sec);
    sec+=1;

    if(sec==60)
    {
        sec = 0;
        min += 1;
    }
    if(min==60)
    {
        min = 0;
        hr += 1;
    }
    },i*1000)
}


//Wrong way to use Set Interval
//Manipulating its interval every time results in overlapping the RESULTS

// for(let i = 1;i<=60;i++)
// {
//     setInterval(()=>
//     {
//     console.log(hr+":"+min+":"+sec);
//     sec+=1;

//     if(sec==60)
//     {
//         sec = 0;
//         min += 1;
//     }
//     if(min==60)
//     {
//         min = 0;
//         hr += 1;
//     }
//     },i*1000)
// }
