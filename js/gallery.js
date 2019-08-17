const slideList = [{
    img: "images/fryzura1.jpg",
    text: 'Odważnie...'
   },
   {
    img: "images/fryzura2.jpg",
    text: 'Ekstrawagancko...'
   },
   {
    img: "images/fryzura3.jpg",
    text: 'Profesjonalnie...'
   },
   {
    img: "images/fryzura4.jpg",
    text: '...dla Ciebie'
   }];
   /* },
   
   {
    img: "images/fryzura5.jpg",
    text: 'Drugi tekst'
   },
   {
    img: "images/fryzura6.jpg",
    text: 'Drugi tekst' */
   
   
   const image = document.querySelector('img.slider');
   const h1 = document.querySelector('h1.slider');
   const squares = [...document.querySelectorAll('.squares span')]
   // Interfejs
   const time = 3000;
   let active = 0;
   
   // Implementacje
   
   const changeDot = () => {
    const activeDot = squares.findIndex(dot => dot.classList.contains('active'));
    squares[activeDot].classList.remove('active');
    squares[active].classList.add('active');
   }
   
   const changeSlide = () => {
    active++;
    if (active === slideList.length) {
     active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
   }
   let interval = setInterval(changeSlide, time);
   
    const slideTiming = (e) => {
        if (e.keyCode === 37 || e.keyCode === 39 || e.target === document.querySelector(".fa-chevron-right") || e.target === document.querySelector(".fa-chevron-left")) {
            clearInterval(interval);
            interval = setInterval(changeSlide, time);
            if (e.keyCode === 39 || e.target === document.querySelector(".fa-chevron-right")) {
                changeSlide();
            }
            else if (e.keyCode === 37 || e.target === document.querySelector(".fa-chevron-left")) {
                if (active > 0) {
                    active -= 2;
                }
                else if (active === 0) {
                    active = 1;
                }
                changeSlide();
            }
        }
    }
   
   window.addEventListener('keydown', slideTiming);
   document.querySelector(".fa-chevron-right").addEventListener('click', slideTiming);
   document.querySelector(".fa-chevron-left").addEventListener('click', slideTiming);

