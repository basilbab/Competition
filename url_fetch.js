function myFetch(url)
{
    return new Promise((resolve,reject)=>{
     fetch(url)
     .then((response)=>response.json())
     .then((data)=>{
        resolve(data)
     })
     .catch((err)=>{
        reject(err)
     })
    })
}

myFetch('https://jsonplaceholder.typicode.com/posts/')
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})