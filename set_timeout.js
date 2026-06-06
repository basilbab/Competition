let counter=0
function timeout()
{ 
    console.log(counter)
    counter=counter+1
}
function myTimer()
{
  return new Promise((resolve,reject)=>{
    let t= setInterval(() => {
   if(counter<10)
   {
     timeout()
   }
   else
   {
    clearInterval(t)
    resolve()
   }
}, 1000);
  })

}

async function caller() {
    await myTimer()
    console.log('done')
}
caller()