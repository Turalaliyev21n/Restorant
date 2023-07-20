const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.wrapper i');
const firstCardWidth = carousel.querySelector(".card").offsetWidth;


let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const autoPlay = () => {
    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}



carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);





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
 
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const btn4=document.querySelector("#btn4");
const btn5=document.querySelector("#btn5");


const sorc1=document.querySelector('#sorc1');
const sorc2=document.querySelector('#sorc2');
const sorc3=document.querySelector('#sorc3');
const sorc4=document.querySelector('#sorc4');
const sorc5=document.querySelector('#sorc5');

btn1.addEventListener("click",()=>{
    sorc1.style.display ='block'
    sorc2.style.display ='block'
    sorc3.style.display ='block'
    sorc4.style.display ='block'
    sorc5.style.display ='block'
    sorc1.style.display ='flex'
    sorc2.style.display ='flex'
    sorc3.style.display ='flex'
    sorc4.style.display ='flex'
    sorc5.style.display ='flex'
    sorc1.style.width='380px'

    

})

btn2.addEventListener("click",()=>{
    sorc1.style.display ='none'
    sorc2.style.display ='block'
    sorc3.style.display ='none'
    sorc4.style.display ='none'
    sorc5.style.display ='none'
    sorc2.style.width ='380px'
    sorc2.style.display ='flex'
})
btn3.addEventListener("click",()=>{
    sorc1.style.display ='none'
    sorc2.style.display ='none'
    sorc3.style.display ='block'
    sorc4.style.display ='none'
    sorc5.style.display ='none'
    sorc3.style.width ='380px'
    sorc3.style.display ='flex'
})
btn4.addEventListener("click",()=>{
    sorc1.style.display ='none'
    sorc2.style.display ='none'
    sorc3.style.display ='none'
    sorc4.style.display ='block'
    sorc5.style.display ='none'
    sorc4.style.width ='380px'
    sorc4.style.display ='flex'
})
btn5.addEventListener("click",()=>{
    sorc1.style.display ='none'
    sorc2.style.display ='none'
    sorc3.style.display ='none'
    sorc4.style.display ='none'
    sorc5.style.display ='block'
    sorc5.style.width ='380px'
    sorc5.style.display ='flex'
})


const dinner1=document.querySelector("#dinner1");
const dinner2=document.querySelector("#dinner2");



dinner1.addEventListener("click",()=>{
    dinner2.style.opacity='1'
})
dinner1.addEventListener("mouseup",()=>{
    dinner2.style.opacity='0'
})



