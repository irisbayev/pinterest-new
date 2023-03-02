let docTitile = document.title;
window.addEventListener("blur", () =>{
    document.title = "fuck you";
})
window.addEventListener("focus", () =>{
    document.title = docTitile;
})