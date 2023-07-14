const accorionTop=document.querySelector(".accordion_top");
const accorionBottom =document.querySelector(".accordion_buttons");


accorionTop.addEventListener("click",()=>{
    accorionBottom.classList.toggle("accordion_bottoms--open");
})


const accorionTops=document.querySelector(".accordion_top1");
const accorionBottoms =document.querySelector(".accordion_buttons1");


accorionTops.addEventListener("click",()=>{
    accorionBottoms.classList.toggle("accordion_bottoms--open1");
})



const navbar=document.querySelector(".Navbar");

document.addEventListener("scroll",()=>{
    if(window.scrollY > 150){
        navbar.classList.add("nav--scroll")
    }else{
        navbar.classList.remove("nav--scroll")
    }
})

const Book_table=document.querySelector(".Book_table");

document.addEventListener("scroll",()=>{
    if(window.scrollY > 150){
        Book_table.classList.add("Book--scroll")
    }else{
        Book_table.classList.remove("Book--scroll")
    }
})