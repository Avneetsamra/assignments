function f(a)
{  
   let b=[]
   a=[1,`dog`,`one`]
   for(let i=0;i<=2;i++)
    {
        b=a.splice(0,1)
        console.log(`${i}:${b}`)
    }
}
f([])
