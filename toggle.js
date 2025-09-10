let check = document.querySelector("input")
const body = document.body

check.addEventListener("change", ()=>{
    
    if(body.classList.contains("lightmode")){
        body.classList.remove("lightmode")
        body.classList.add("darkmode")
    }
    else{
        body.classList.remove("darkmode")
        body.classList.add("lightmode")
    }
})