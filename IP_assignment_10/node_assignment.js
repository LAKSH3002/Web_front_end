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
// const newData = 'This is new data.';
//     fs.writeFile('example.txt', newData, (err) => {
//       if (err) throw err;
//       console.log('Data written to the file.');
// });

// e. Append data to the file
// const appendedData = '\nThis data is appended.';
// fs.appendFile('new_example.txt', appendedData, (err) => {
//   if (err) throw err;
//   console.log('Data appended to the file.');
// });
