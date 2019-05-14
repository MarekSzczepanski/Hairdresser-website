const moveToSection = (e) => {
    let fillerScroll = 12;
    this.newAnimations = new Animations;
    for (let i=1; i<7; i++) {
        document.querySelector(".mapP"+i).style.border = "solid #555555 1px";
        document.querySelector(".mapP"+i).style.color = "beige";
        document.querySelector(".filler").style.top = "40vh";
        document.querySelector(".filler2").style.top = "-55vh";
    }
    for (let i=1; i<7; i++) {
        if (e.target.id == i) { 
            const doAnimationsImg = this.newAnimations.animation(document.getElementById("image"+i), "left", "50vw", 0, 1000)
            document.getElementById("section"+i).scrollIntoView({ 
                behavior: 'smooth'
            });
            if (i === 1) {
                const doAnimationsSymbol2 = this.newAnimations.animation(document.querySelector(".symbol"+1), "top", "-18vh", "1.9vh", 1500)
            }
            else {
                const doAnimationsSymbol = this.newAnimations.animation(document.querySelector(".symbol"+i), "top", "-18vh", 0, 1500)
            }
            document.querySelector(".filler").style.top = fillerScroll-4+"vh";
            document.querySelector(".mapP"+i).style.border = "solid #B51FAD 1px";
            document.querySelector(".mapP"+i).style.color = "orchid";
            for (let j=1; j<i; j++) {
                document.querySelector(".filler2").style.top = (fillerScroll-72)+"vh";
            }
        }
        fillerScroll += 12;
    }
}
document.querySelector("nav").addEventListener("click", moveToSection);
for (let i=1; i<7; i++) {
    document.querySelector(".mapP"+i).addEventListener("click", moveToSection);
} 

const moveToTop = () => {
    document.body.scrollIntoView({ 
        behavior: 'smooth'
    });
}

document.getElementById("arrow").addEventListener("click", moveToTop)