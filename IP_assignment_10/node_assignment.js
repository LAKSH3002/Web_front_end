const fs = require('fs');

// a) Create a file
fs.writeFile('laksh.txt','Hello Laksh here',
(err)=>
{
    if(err) throw err;
    console.log('FIle Created Successfully');
});

// b) Read Data from the file.
fs.readFile('laksh.txt','utf-8',
(err,data)=>{
    if(err) throw err;
    console.log('File Content: ',data);
});

// c) rename a file
fs.rename('laksh.txt','hero2.txt',(err)=>{
    if(err) throw err
    console.log('file renamed successfully')
})

// d) Deleting hero file
fs.unlink('hero.txt',(err)=>{
    if(err) throw err
    console.log('file deleted')
})

// write to a file
// Append data to the file

