const stepwise = document.getElementById('stepwise');
const slider = document.getElementById('slider');
const sliderval = document.getElementById('slider-value');
const rndm = document.getElementById('random');

stepwise.onkeypress = e => {
    e.preventDefault();
};

stepwise.onpaste = e => {
    e.preventDefault();
};

slider.oninput = e => {
    sliderval.value = slider.value;
};

function roll() {
    rndm.value = random_phone();
}

function random_phone() {
    return Math.floor((Math.random() * 8888888888) + 1111111111);
}
