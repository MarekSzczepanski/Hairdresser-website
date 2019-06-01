class Animations {
    constructor() {

    }
    animation(element, property, start, end, time, delay, easing, iterations, direction) {
        element.animate([{ [property]: start }, { [property]: end }], {
            duration: time,
            fill: "forwards",
            delay: delay,
            easing: easing,
            iterations: iterations,
            direction: direction
        })
    }
}