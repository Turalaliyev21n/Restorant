const carousel2= document.querySelector(".carousel5");

let isDragStart =false, prevPageX, prevScrollLeft;

const dragStart2 =(e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel2.scrollLeft;
}
 
const dragging2 = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel2.classList.add("dragging2");
    let positionDiff = e.pageX - prevPageX;
    carousel2.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop2 =() =>{
    isDragStart =false;
    carousel2.classList.remove("dragging2");

}


carousel2.addEventListener("mousedown",dragStart2);
carousel2.addEventListener("mousemove",dragging2);
carousel2.addEventListener("mouseup",dragStop2);


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