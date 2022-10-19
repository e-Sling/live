


var airspeed = 100;
var roll = 10;
var pitch = 20;
var altidude = 10000;
var heading = 120;
var vertical_speed = 100;

var bat_temp = 50;
var voltage = 3;
var current = 400;
var rpm = 2500;
var torque = 50;
var power = 75;

var soc = 10;



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

    airspeed.setAirSpeed(airspeed);

    attitude.setRoll(roll);
    attitude.setPitch(roll);
    //attitude.setILSLocalizer(-10);
    //attitude.setILSGlideslope(15);

    altimeter.setAltitude(altidude);
    altimeter.setPressure(29.92);
    turn_coordinator.setTurn(0);
    heading.setHeading(heading);
   


    variometer.setVario(vertical_speed/100);

}, 50);


  








async function set_bar_temperature(id_bar, id_zahl, id_pfeil, id_strich_links, id_strich_rechts ,value, value_min_good, value_max_good, unit){
  document.getElementById(id_zahl).innerHTML = value + unit;
  document.getElementById(id_strich_links).style.marginLeft = 25 +'%';
  document.getElementById(id_strich_rechts).style.marginLeft = 75 +'%';
  let start = value_min_good - (value_max_good - value_min_good) / 2;
  let bar_length = 2 * (value_max_good - value_min_good);
  let left = (value - start) / bar_length * 100;
  if(left <= 0) {left = 0;}
  if(left >= 100) {left = 100;}
  document.getElementById(id_pfeil).style.marginLeft = left + '%';
  document.getElementById(id_bar).style.marginLeft = 25 + '%';
}

async function set_bar(id_bar, id_zahl, id_pfeil, id_strich_links, id_strich_rechts ,value, value_min_good, value_max_good, unit){
  document.getElementById(id_zahl).innerHTML = value + unit;
  document.getElementById(id_strich_links).style.display = 'none';
  document.getElementById(id_strich_rechts).style.marginLeft = 75 +'%';
  let left = value / value_max_good * 75;
  if(left <= 0) {left = 0;}
  if(left >= 100) {left = 100;}
  document.getElementById(id_pfeil).style.marginLeft = left + '%';
  document.getElementById(id_bar).style.marginLeft = 0 + '%';
  document.getElementById(id_bar).style.width = 75 + '%';
}



set_bar_temperature('bat_temp', 'bat_temp_num', 'tr1', 'bat_ref1', 'bat_ref2', bat_temp, 10, 50 , '°');

set_bar_temperature('voltage_bar','voltage', 'voltage_arrow', 'voltage_min', 'voltage_max', voltage, 2.5, 4.5, 'V');

set_bar('rpm_bar','rpm', 'rpm_arrow', 'rpm_min', 'rpm_max', rpm, 0, 2500, '' );

set_bar('torque_bar','torque', 'torque_arrow', 'torque_min', 'torque_max', torque, 0, 200, ' Nm' );

set_bar('mot_bar','mot_power', 'mot_arrow', 'mot_min', 'mot_max', power, 0, 200, ' %' );

set_bar('current_bar','current', 'current_arrow', 'current_min', 'current_max', current, 0, 400, ' A' );



document.getElementById('percentage').innerHTML = soc + '%';
document.getElementById('indicator').style.width = soc + '%';












async function hide_dropdown() {
  const content = document.getElementById("myDropdown");
  const dropdown_button = document.getElementById("dropdown_button");

  if (content.style.display === "none") {
    dropdown_button.innerHTML = "Less Information";
    content.style.display = "block";
  } else {
    dropdown_button.innerHTML = "More Information";
    content.style.display = "none";
  }

  
  
}
  
async function hide_panel() {
  const x = document.getElementById("panel");
  const show =  document.getElementById("show_button");

  
  if (x.style.display === "none") {
    show.style.display = "none";
    x.style.display = "block";
  } else {
    show.style.display = "block";
    x.style.display = "none";
  }
}


// https://www.chartjs.org/





