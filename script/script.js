//////{--->navbar
//-->selects
const menu_delete=document.querySelector(".fa-plus");
const listItem=document.querySelector(".list-item");
const menu_=document.querySelector(".menu");
//--->functions
function addBarFunction(e){
    e.preventDefault()
    // console.log("hiii")
    listItem.style.left="0%";
    menu_.style.visibility="hidden";
};
function deleteBarfunction(e){
    e.preventDefault()
    listItem.style.left="-100%";
    menu_.style.visibility="visible";
};
//--->events
menu_.addEventListener("click",addBarFunction);
menu_delete.addEventListener("click",deleteBarfunction);
///----}
//////{---->night-mode
//--->selects
const header =document.querySelector("header");
const footer=document.querySelector("footer");
const main=document.querySelector("main");
const conteiner_slider_dev=document.querySelector(".conteiner-slider-dev");
const button_NightMood=document.querySelector(".nightMood");
const button_NightMood_i=document.querySelector(".nightMood i");
const paragraf_=document.querySelectorAll(".pragraf");
const about=document.querySelector(".about");
const coteiner=document.querySelector(".conteiner");
//--->functions
function button_NightMood_function(e){
    e.preventDefault();
    //console.log(button_NightMood_i.className.includes("fa-moon"))
    if(button_NightMood_i.className.includes("fa-moon")){
       button_NightMood_i.classList.replace("fa-moon","fa-sun");
       header.style.background="black";
       footer.style.background="black";
       main.style.background="black";
       conteiner_slider_dev.style.background="black";
       paragraf_.forEach((e)=>{
        e.style.color="white";
       });
       coteiner.style.background="rgba(255, 255, 255, 0.148)";
    }else if(button_NightMood_i.className.includes("fa-sun")){
        button_NightMood_i.classList.replace("fa-sun","fa-moon");
        header.style.background="radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 59%)";
        footer.style.background="radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 59%)";
        main.style.background="white";
        conteiner_slider_dev.style.background="white";
        paragraf_.forEach((e)=>{
         e.style.color="black";
        });
        coteiner.style.background="rgba(0, 0, 0, 0.148)";  
    }
};
//--->events
button_NightMood.addEventListener("click",button_NightMood_function);
//////-----}