
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

    altimeter.setAltitude(5000);
    altimeter.setPressure(29.92);
    turn_coordinator.setTurn(20);
    heading.setHeading(180);
   


    variometer.setVario(5);

}, 50);


  








async function set_bar(id_bar, id_zahl, id_pfeil, id_strich_links, id_strich_rechts ,value, value_min_good, value_max_good){
  document.getElementById(id_zahl).innerHTML = value + '°';
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



set_bar('bat_temp', 'bat_temp_num', 'tr1', 'bat_ref1', 'bat_ref2', 5, 10, 20 );

set_bar('mot_temp','mot_temp_num', 'tr2', 'mot_ref1', 'mot_ref2', 10, 10, 200 );












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





