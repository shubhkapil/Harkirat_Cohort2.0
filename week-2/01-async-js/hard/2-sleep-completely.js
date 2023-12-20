/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const p = new Promise((resolve)=>
    {
        //Very Inefficient Code
        //Create multiple timeouts that leads to extreme delay or heap failure

        // let time = milliseconds/1000;
        // let i =0;
        // while(i<time)
        // {
        //     setTimeout(()=>++i,1000);
        // }
    
        setTimeout(resolve,milliseconds);
    });

    return p;
}

module.exports = sleep;
