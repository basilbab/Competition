import fs from 'fs'
function myFileRead(){
   const data =fs.readFileSync('file_read_sync.js','utf-8')
   console.log(data)
}

myFileRead()




