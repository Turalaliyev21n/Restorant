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