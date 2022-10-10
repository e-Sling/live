var settings = {
    off_flag: false,
    size: 150,
    showBox: false,
    showScrews: true
};

var airspeed = $.flightIndicator('#airspeed', 'airspeed', settings);
var attitude = $.flightIndicator('#attitude', 'attitude', settings);
var altimeter = $.flightIndicator('#altimeter', 'altimeter', settings);
var turn_coordinator = $.flightIndicator('#turn_coordinator', 'turn_coordinator', settings);
var heading = $.flightIndicator('#heading', 'heading', settings);
var variometer = $.flightIndicator('#variometer', 'variometer', settings);

//needles ausblenden
heading.setBeaconOne(0, false);
heading.setBeaconTwo(0, false);

setInterval(function() {

    airspeed.setAirSpeed(120);

    attitude.setRoll(10);
    attitude.setPitch(10);
    //attitude.setILSLocalizer(-10);
    //attitude.setILSGlideslope(15);

    altimeter.setAltitude(11500);
    altimeter.setPressure(29.92);
    turn_coordinator.setTurn(20);
    heading.setHeading(180);
   


    variometer.setVario(5);

}, 50);


const bat_temp = document.getElementById('bat_temp');
bat_temp.style.width = 50 + '%';
bat_temp.style.backgroundColor  = "blue";

const bat_temp_num = document.getElementById('bat_temp_num');
bat_temp_num.innerHTML = 80 +'°';

const mot_temp = document.getElementById('mot_temp');
mot_temp.style.width = 70 + '%';
const mot_temp_num = document.getElementById('mot_temp_num');
mot_temp_num.innerHTML = 300 +'°';
