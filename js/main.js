let selected = sessionStorage.getItem('selectedSection');
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
            const doAnimationsImg = this.newAnimations.animation(document.getElementById("image"+i), "marginLeft", "80vw", "0", 1000);
            document.getElementById("section"+i).scrollIntoView({ 
                behavior: 'smooth'
            });
            sessionStorage.setItem('selectedSection', e.target.id);
            if (i === 1) {
                const doAnimationsSymbol2 = this.newAnimations.animation(document.querySelector(".symbol"+1), "top", "-20vh", "101.9vh", 1000)
            }
            else if (i === 2){
                const doAnimationsSymbol = this.newAnimations.animation(document.querySelector(".symbol"+2), "top", "80vh", "202.1vh", 1000)
            }
            document.querySelector(".filler").style.top = fillerScroll-4+"vh";
            document.querySelector(".mapP"+i).style.border = "solid #B51FAD 1px";
            document.querySelector(".mapP"+i).style.color = "orchid";
            document.querySelector(".filler2").style.top = (fillerScroll-72)+"vh";
        }
        fillerScroll += 12;
    }    
    selected = null;
}
document.querySelector("nav").addEventListener("click", moveToSection);
for (let i=1; i<7; i++) {
    document.querySelector(".mapP"+i).addEventListener("click", moveToSection);
} 

const moveToTop = () => {
    document.body.scrollIntoView({ 
        behavior: 'smooth'
    });
    selected = null;
}

document.getElementById("arrow").addEventListener("click", moveToTop);

if (selected !== null) { 
    document.querySelector(".mapP"+selected).style.color = "orchid";
    document.querySelector(".mapP"+selected).style.border = "solid 1px #F018E6";
    let fillerPosition = 8;
    let filler2Position = -55
    for (let i=1; i<7; i++) {
        if (selected == i) {
            document.querySelector(".filler").style.top = fillerPosition+"vh";
            document.querySelector(".filler2").style.top = fillerPosition-68+"vh";
        }
        fillerPosition += 12;
    }
} 