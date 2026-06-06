import fs from 'fs'
function myFileRead(){
 return new Promise((resolve,reject)=>{
    fs.readFile('read_file.js','utf-8',(data,err)=>{
        if(err)
            reject(err)
        else
            resolve(data)
    })
 })
   
}
myFileRead()
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})


