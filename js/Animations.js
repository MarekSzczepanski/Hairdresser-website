class Animations {
    constructor() {

    }
    animation(element, property, start, end, time) {
        element.animate([{ [property]: start }, { [property]: end }], {
            duration: time,
            fill: "forwards"
        });
    }
}