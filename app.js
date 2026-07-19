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
let colurl = "https://universities.hipolabs.com/search?country=";

let btn=document.querySelector("#btn4");

btn.addEventListener("click",async()=>{
    console.log("button was clicked");
    let country=document.querySelector("input").value;
    console.log(country);
    let names=await getcollage(country);
    show(names);
})
function show(names) {
    let list = document.querySelector("ul");

    // list.innerHTML = await getcollage(country); // Clear previous results

    for (let name of names) {
        let li = document.createElement("li");
       console.log(name.name);
        li.innerText = name.name;
        list.appendChild(li);
    }
}


async function getcollage(country) {
    try {
        let res = await axios.get(colurl + country);
        return res.data;
    } catch (e) {
        console.log(e);
        return [];
    }
}
