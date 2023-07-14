
const carousel1 = document.querySelector(".carousel1");
const arrowBtns1 = document.querySelectorAll('.wrapper1 i');
const firstCardWidth1 = carousel1.querySelector(".card1").offsetWidth;

let isDragging1 = false, startX1, startScrollLeft1;

arrowBtns1.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel1.scrollLeft += btn.id === "left1" ? - firstCardWidth1 : firstCardWidth1;
    })
})


const dragStart1 = (e) => {
    isDragging1 = true;
    carousel1.classList.add("dragging1");
    startX1 = e.pageX;
    startScrollLeft1 = carousel1.scrollLeft;
}

const dragStop1 = () => {
    isDragging1 = false;
    carousel1.classList.remove("dragging1")
}


const dragging1 = (e) => {
    if (!isDragging1) return
    carousel1.scrollLeft = startScrollLeft1 - (e.pageX - startX1);
}







carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("mousemove", dragging1);
document.addEventListener("mouseup", dragStop1);




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