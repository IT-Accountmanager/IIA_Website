const carousel = document.querySelector(".carousel");

const dragging = (e)=> {
    if(!isDragging) return;
   carousel.scrollLeft = e.pageX;
}





carousel.addEventListener("mousemove", dragging);