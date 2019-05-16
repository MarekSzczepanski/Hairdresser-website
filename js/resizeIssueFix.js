const resizeIssueFix = () => { 
    "use strict";
    for (let i=1; i<7; i++) {
        if (document.querySelector(".mapP"+i).style.color === "orchid") {
            document.getElementById("section"+i).scrollIntoView({ 
                behavior: 'smooth'
            })
        }
    }
}
window.addEventListener("resize", resizeIssueFix)