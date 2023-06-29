let daysItem = document.getElementById("days");
let hoursItem = document.getElementById("hours");
let minsItem = document.getElementById("min");
let secsItem = document.getElementById("sec");

let futureDate = new Date(" Jan 1, 2024 00:00:00");


let countdown = () => {
    let currentDate = new Date()
    let distance = futureDate.getTime() - currentDate.getTime();

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minsItem.innerHTML = minutes;
    secsItem.innerHTML = seconds;

}

setInterval(countdown, 1000)
