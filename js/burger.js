const navA = document.querySelectorAll("a");
const burgerBack = () => {
    document.querySelector(".burger").style.display = "block";
    navA.forEach(a => {
        a.style.display = "none";
    })
    document.querySelector(".burger").addEventListener("click", burger);
}
const burger = (e) => {
    e.target.style.display = "none";
    navA.forEach(a => {
        a.style.display = "block";
        a.style.right = "1vw";
        a.style.width = "15vw";
        a.style.height = "5vh";
        a.style.display = "flex";
        a.style.justifyContent = "center";
        a.style.alignItems = "center";
        a.style.background = "beige";
        a.style.color = "black";
        a.addEventListener("click", burgerBack);
    })
    let top = 2;
    for (let i=0; i<3; i++) {
        navA[i].style.top = top+"vh";
        top += 7;
    }
}
document.querySelector(".burger").addEventListener("click", burger);