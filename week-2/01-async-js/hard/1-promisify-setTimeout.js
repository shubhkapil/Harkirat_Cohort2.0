/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(duration)
{
    const p = new Promise(function (resolve)
    {
        setTimeout(resolve,duration*1000);
    });
    return p;
}



module.exports = wait;

