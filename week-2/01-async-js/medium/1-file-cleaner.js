// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

let fs = require('fs')

fs.readFile('temp.txt','utf-8',(err, data) =>
{
    if(err)
        console.log(err)
    else
    {
        let ans = ""
        for (let i = 0;i<data.length;i++)
        {
            if(data[i]==' ')
            {
                ans+=' ';
                while(data[i++]==' ');
                --i;
            }
            ans+=data[i]
        }
        fs.writeFile('temp.txt',ans,(err) => {if(err) console.log(err)})
    }
    
})

setTimeout(()=> {
    fs.readFile('temp.txt','utf-8',(err,data)=>
    {
        if(err)
            console.log(err)
        else    
            console.log(data)
    })
},5000)