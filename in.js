let docTitile = document.title;
window.addEventListener("blur", () =>{
    document.title = "yomon";
})
window.addEventListener("focus", () =>{
    document.title = docTitile;
})