let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",async()=>{
    let data=await getfacts();
    let para=document.querySelector("p");
    para.innerText=data;

})
let btn2=document.querySelector("#dog");
btn2.addEventListener("click" ,async()=>{
    let image=await dogfacts();
    console.log(image);
    let img=document.querySelector("img");
    img.setAttribute("src",image);
})

let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";
async function getfacts() {
    try{
    let res=await axios.get(url);
    return res.data.fact;
    }
    catch(e){
        console.log("Error-",e);
        return "NO Data Found";
    }
    
}
async function dogfacts(){
    try{
        let res=await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        console.log("error-",e);
        return "NO image found in Dog.";
    }
    
}