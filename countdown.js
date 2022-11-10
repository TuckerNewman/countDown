const oneDay = 1000 * 60 * 60 * 24; //milliseconds in a day

let today = new Date(); //get today
let moveIn = new Date("2022-12-02T00:00:00");

let timeDifference = moveIn.getTime() - today.getTime(); //find difference in time

let dayDifference = Math.round(timeDifference/oneDay); //find difference in days

console.log(dayDifference);


document.getElementById('days-left').innerHTML = dayDifference;
