const backToTop = document.getElementById("back-to-top");

window.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});