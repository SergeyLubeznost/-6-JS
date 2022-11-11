const trafficLightElRed = document.querySelector('#trafficLightRed');
const trafficLightElYellow = document.querySelector('#trafficLightYellow');
const trafficLightElGreen = document.querySelector('#trafficLightGreen');

function makeGreen() {
    trafficLightElGreen.style.background = ('green');
    trafficLightElGreen.removeEventListener('click', makeGreen);
   
}

trafficLightElGreen.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightElYellow.style.background = ('yellow');
    trafficLightElYellow.removeEventListener('click', makeYellow);
   
}

trafficLightElYellow.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightElRed.style.background = ('Red');
    trafficLightElRed.removeEventListener('click', makeRed);

}

trafficLightElRed.addEventListener('click', makeRed);

trafficLightElGreen.addEventListener('mousedown', 
 function (event){
    if (event.which===1){
        trafficLightElGreen.style.background = ('green');
        trafficLightElRed.style.background = ('black');
        trafficLightElYellow.style.background = ('black');
    }
})

trafficLightElYellow.addEventListener('click', 
 function (event){
    if (event.which===1){
        trafficLightElYellow.style.background = ('yellow');
        trafficLightElRed.style.background = ('black');
        trafficLightElGreen.style.background = ('black');
    }
})
trafficLightElRed.addEventListener('click', 
 function (event){
    if (event.which===1){
        trafficLightElRed.style.background = ('Red');
        trafficLightElYellow.style.background = ('black');
        trafficLightElGreen.style.background = ('black');
    }
})
