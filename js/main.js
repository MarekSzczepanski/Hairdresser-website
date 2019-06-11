let section3AnimationFlag = 0;
let selected = sessionStorage.getItem('selectedSection');
const textAnimations = () => {
    this.newAnimations = new Animations;
        if (window.innerWidth < 639 && window.innerHeight > 400 || window.innerWidth == 768 && window.innerHeight == 1024 /* iPad */ || window.innerWidth == 1024 && window.innerHeight == 1366 /* iPad pro */ || window.innerWidth == 800 && window.innerHeight == 1280 /* Kindle Fire */ || window.innerWidth == 1024 && window.innerHeight == 1440 /* Surface Pro */) {
            const doAnimationsArrows = this.newAnimations.animation(document.querySelector(".arrows"), "paddingTop", "0", "5vh", 700, 0, "linear", "Infinity", "alternate")
            const doAnimationsOffer1 = this.newAnimations.animation(document.querySelector(".offer"), "marginTop", "40vh", "-50vh", 10500, 0, "linear", "Infinity")
            const doAnimationsOffer2 = this.newAnimations.animation(document.querySelector(".offer2"), "marginTop", "40vh", "-50vh", 10500, 5200, "linear", "Infinity")
        }
        else if (window.innerWidth > 639) {
            const doAnimationsOffer1 = this.newAnimations.animation(document.querySelector(".offer"), "marginLeft", "90vw", "-85vw", 10500, 0, "linear", "Infinity")
            const doAnimationsOffer2 = this.newAnimations.animation(document.querySelector(".offer2"), "marginLeft", "90vw", "-85vw", 10500, 5300, "linear", "Infinity") 
        }
        else {
            document.querySelector(".offer").style.marginTop = 0;
            document.querySelector(".offer").style.paddingTop = ".7em";
            const allArrowDown = document.querySelectorAll(".arrowDown");
            allArrowDown.forEach(arrowDown => {
                arrowDown.style.display = "none";
            })
            const allOfferP = document.querySelectorAll(".offerP");
            allOfferP.forEach(offerP => {
                offerP.style.fontSize = "3vh";
            })
        }
}
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
    if (selected == 3) {
        for (let i=2; i<4; i++) {
            document.querySelector(".textWrapP3-"+i).style.color = "beige";
        }
        document.querySelector(".textWrapP3-1").style.color = "#F018E6";
        textAnimations();
    }
} 
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
            document.querySelector(".textWrapP3-1").style.color = "black"
            const doAnimationsImg = this.newAnimations.animation(document.getElementById("image"+i), "marginLeft", "80vw", "0", 1000);
            document.getElementById("section"+i).scrollIntoView({ 
                behavior: 'smooth'
            });
            sessionStorage.setItem('selectedSection', e.target.id);
            if (i == 3) {
                if (window.innerWidth < 1419) {
                    const doAnimationsTextWrap1 = this.newAnimations.animation(document.querySelector(".textWrapP1"), "marginTop", "250vw", "7.55em", 800)
                    const doAnimationsTextWrap2 = this.newAnimations.animation(document.querySelector(".textWrapP2"), "marginLeft", "400vw", "0", 1400)
                    const doAnimationsTextWrap4 = this.newAnimations.animation(document.querySelector(".textWrapP4"), "marginLeft", "700vh", "0", 2000, 200, "ease-in")
                }
                else if (window.innerWidth < 1439) {
                    const doAnimationsTextWrap1 = this.newAnimations.animation(document.querySelector(".textWrapP1"), "marginTop", "250vw", "8.45em", 800)
                    const doAnimationsTextWrap2 = this.newAnimations.animation(document.querySelector(".textWrapP2"), "marginLeft", "400vw", "0", 1400)
                    const doAnimationsTextWrap4 = this.newAnimations.animation(document.querySelector(".textWrapP4"), "marginLeft", "700vh", "0", 2000, 200, "ease-in")
                } 
                else if (window.innerHeight > 1059 && window.innerHeight < 1300) {
                    const doAnimationsTextWrap1 = this.newAnimations.animation(document.querySelector(".textWrapP1"), "marginTop", "250vw", "7.47em", 800)
                    const doAnimationsTextWrap2 = this.newAnimations.animation(document.querySelector(".textWrapP2"), "marginLeft", "400vw", ".2em", 1400)
                    const doAnimationsTextWrap4 = this.newAnimations.animation(document.querySelector(".textWrapP4"), "marginLeft", "700vh", ".2em", 2000, 200, "ease-in")
                }
                else if (window.innerHeight > 1299) {
                    const doAnimationsTextWrap1 = this.newAnimations.animation(document.querySelector(".textWrapP1"), "marginTop", "250vw", "7.5em", 800)
                    const doAnimationsTextWrap2 = this.newAnimations.animation(document.querySelector(".textWrapP2"), "marginLeft", "400vw", ".2em", 1400)
                    const doAnimationsTextWrap4 = this.newAnimations.animation(document.querySelector(".textWrapP4"), "marginLeft", "700vh", "0", 2000, 200, "ease-in")
                }
                else if (window.innerHeight < 900) {
                    const doAnimationsTextWrap1 = this.newAnimations.animation(document.querySelector(".textWrapP1"), "marginTop", "250vw", "8.45em", 800)
                    const doAnimationsTextWrap2 = this.newAnimations.animation(document.querySelector(".textWrapP2"), "marginLeft", "400vw", ".2em", 1400)
                    const doAnimationsTextWrap4 = this.newAnimations.animation(document.querySelector(".textWrapP4"), "marginLeft", "700vh", "0", 2000, 200, "ease-in")
                } 
                else {
                    const doAnimationsTextWrap1 = this.newAnimations.animation(document.querySelector(".textWrapP1"), "marginTop", "250vw", "7.8em", 800)
                    const doAnimationsTextWrap2 = this.newAnimations.animation(document.querySelector(".textWrapP2"), "marginLeft", "400vw", ".2em", 1400)
                    const doAnimationsTextWrap4 = this.newAnimations.animation(document.querySelector(".textWrapP4"), "marginLeft", "700vh", ".2em", 2000, 200, "ease-in")
                }
                const doAnimationsTextWrap31a = this.newAnimations.animation(document.querySelector(".textWrapP3-1"), "color", "#F018E6", "black", 0, 0, "ease-in")
                const doAnimationsTextWrap31b = this.newAnimations.animation(document.querySelector(".textWrapP3-1"), "color", "black", "#F018E6", 2000, 1200, "ease-in")
                const doAnimationsTextWrap32a = this.newAnimations.animation(document.querySelector(".textWrapP3-2"), "color", "beige", "black", 0, 0, "ease-in")
                const doAnimationsTextWrap32b = this.newAnimations.animation(document.querySelector(".textWrapP3-2"), "color", "black", "beige", 2000, 1200, "ease-in")
                const doAnimationsTextWrap33a = this.newAnimations.animation(document.querySelector(".textWrapP3-3"), "color", "beige", "black", 0, 0, "ease-in")
                const doAnimationsTextWrap33b = this.newAnimations.animation(document.querySelector(".textWrapP3-3"), "color", "black", "beige", 2000, 1200, "ease-in")
                const doAnimationsArrows = this.newAnimations.animation(document.querySelector(".arrows"), "paddingTop", "0", "5vh", 700, 0, "linear", "Infinity", "alternate")
                if (selected !== 3 && section3AnimationFlag == 0) {
                    textAnimations();
                    section3AnimationFlag = 1;
                }
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

const showImage = (e) => {
    for (let i=1; i<6; i++) {
        if (e.target.id === "hair"+i) {
            document.querySelector(".x").style.display = "block"
            if (window.innerHeight < window.innerWidth) {
                e.target.classList.remove("hair");
                e.target.classList.add("bigHairVertical"+i);
            }
            else {
                e.target.classList.remove("hair");
                e.target.classList.add("bigHairHorizontal"+i);
                document.querySelector(".x").style.top = "205vh"
                document.querySelector(".x").style.left = "91vw"
            }
        }     
    }   
    const closeImg = () => {
        for (let i=1; i<6; i++) {
            if (window.innerHeight < window.innerWidth && document.getElementById("hair"+i).classList.contains("bigHairVertical"+i)) {
                document.querySelector(".bigHairVertical"+i).classList.remove("bigHairVertical"+i);
                document.getElementById("hair"+i).classList.add("hair");
            }
            else if (document.getElementById("hair"+i).classList.contains("bigHairHorizontal"+i)) {
                document.querySelector(".bigHairHorizontal"+i).classList.remove("bigHairHorizontal"+i);
                document.getElementById("hair"+i).classList.add("hair");
            }
            document.querySelector(".x").style.display = "none";
        } 
    } 
    document.querySelector(".x").addEventListener("click", closeImg);  
}
for (let i=1; i<6; i++) {
    document.getElementById("hair"+i).addEventListener("click", showImage);
}