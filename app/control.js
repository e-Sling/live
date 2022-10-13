
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

function bat_set_refs(margin1, margin2){
  const ref1 = document.getElementById("bat_ref1");
  ref1.style.backgroundColor = "black";
  ref1.style.marginLeft = margin1 + '%';
  ref1.style.width = 1 + '%';
  ref1.style.height = 100 + '%';

  const ref2 = document.getElementById("bat_ref2");
  ref2.style.backgroundColor = "black";
  ref2.style.marginLeft = margin2 + '%';
  ref2.style.width = 1 + '%';
  ref2.style.height = 100 + '%';
}

function mot_set_refs(margin1, margin2){
  const ref1 = document.getElementById("mot_ref1");
  ref1.style.backgroundColor = "black";
  ref1.style.marginLeft = margin1 + '%';
  ref1.style.width = 1 + '%';
  ref1.style.height = 100 + '%';

  const ref2 = document.getElementById("mot_ref2");
  ref2.style.backgroundColor = "black";
  ref2.style.marginLeft = margin2 + '%';
  ref2.style.width = 1 + '%';
  ref2.style.height = 100 + '%';
}

function set_progbar(val, temp, temp_num , min, green_to_yellow, yellow_to_red, max){
  temp_num.innerHTML = val +'°';
  if(val < green_to_yellow){
    temp.style.width = green_to_yellow +'%';
     temp.style.backgroundColor = "green";
  }
  else if (val < yellow_to_red) {
    temp.style.width = yellow_to_red - green_to_yellow +'%';
    temp.style.marginLeft = green_to_yellow + '%';
    temp.style.backgroundColor = "yellow";

  } 
  else if (val <= max){
    temp.style.width = green_to_yellow - yellow_to_red +'%';
    temp.style.marginLeft = yellow_to_red + '%';
    temp.style.backgroundColor = "red";

  }
}


const bat_temp = document.getElementById('bat_temp');
const bat_temp_num = document.getElementById('bat_temp_num');
const tr1 = document.getElementById('tr1');
set_progbar(val1 = 46, bat_temp,bat_temp_num, 0, margin1 = 50,margin2 = 80, 100);
tr1.style.marginLeft = val1 + '%';
bat_set_refs(margin1, margin2);



const mot_temp = document.getElementById('mot_temp');
const mot_temp_num = document.getElementById('mot_temp_num');
const tr2 = document.getElementById('tr2');
set_progbar(val2 = 30, mot_temp, mot_temp_num, 0, margin1 = 40 , margin2 = 55, 70);
tr2.style.marginLeft = val2 + '%';
mot_set_refs(margin1, margin2);





function hide_dropdown() {

  
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
  

/*
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 
*/



function hide_panel() {
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
var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Altitude',
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false,
    },{
      label: 'Speed',
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }]
  },
   




// https://www.chartjs.org/docs/latest/samples/line/multi-axis.html



  options: {
    legend: {display: true},
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Feet',
        },
        position: 'right',
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }]}
  }
});


