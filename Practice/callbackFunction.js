function cal(a,b,func)
{
    console.log(func)
    const ans = func(a,b)
    console.log(`The result of ${a} and ${b} is: ${ans}`);
}

function area(a,b)
{
    return a*b;
}

function perimeter(a,b)
{
    return 2*(a+b)
}


cal(2,3,area)
cal(2,3,perimeter)

//anonymous Function:

cal(4,5, function (a,b){return a*b*a*b})