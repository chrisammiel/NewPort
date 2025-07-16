const topNavBar = ()=> {
   let element= document.getElementsByClassName("nav");
   for(let i = 0; i<element.length; i++){
    element[i].addEventListener("mouseover", ()=> {
        element[i].style.backgroundColor = "rgb(198, 146, 146)";
    } )

        element[i].addEventListener("mouseout", () =>{
            element[i].style.backgroundColor = "";
    } )
}}
const changeDisplay = ()=> {
   let element= document.querySelectorAll("bu ");
   element.forEach(el = ()=> {
    el.addEventListener("mouseover", ()=> {
        el.style.display = "block";
   })
     el.addEventListener("mouseout", () =>{
            el.style.display = "";
    } )
})}
changeDisplay()
topNavBar ();

const displayModifier = ()=>{
    let element = document.getElementsByClassName("img");
    
    for ( let i = 0; i < element.length; i++){
        let box = document.getElementsByClassName("bu");
        for(let j = 0; j< box.length; j++){
            if (i === j){
                element[i].addEventListener("mouseover", ()=>{
                    box[j].style.display="block";
                })
                element[i].addEventListener("mouseout", ()=>{
                    box[j].style.display="";
                })
            }
        }
    }
}

displayModifier();



