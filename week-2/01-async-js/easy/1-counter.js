// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let a = 0

let interval = setInterval( () => 
    {
        console.log(a++);

        if(a>=10)   
            clearInterval(interval);
    }

,1000)
