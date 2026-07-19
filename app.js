let btn1=document.querySelector("button");
btn1.addEventListener("click",async()=>{
     let data=await getfacts();
     let para=document.querySelector("p");
     para.innerHTML=data;

})


let url="https://catfact.ninja/fact";
async function getfacts(){
    try{
    let res=await axios.get(url);
    return res.data.fact;
    }
    catch(e){
        console.log("error-",e);
        return "NO data found";
    }
    
}