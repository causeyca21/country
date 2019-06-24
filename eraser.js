// <button>Click Here to Get a Country!</button>
var countries = ["Mexico","Canada","France","Spain","England","Ireland","Germany","Russia","Austrailia","Fiji","New Zealand","China","Japan","South Korea","India","Egypt",
"South Afria","Bora Bora","Haiti","Panama","Chile","Greece","Italy","Guyana","Zimbabwe","Antartica","Iceland","Greenland","Israel","Romania","Hungary","Honduras","Bahamas","Venezuela","Bulgaria","Cuba","Vietnam","Peru" ]
var button = $('button');
var answer = $('.answer');
button.on('click', randomizer);
function randomizer(){
  var random = Math.floor(Math.random()*(countries.length-1));
  var final = countries[random];
  answer.text(final);
// var randomDecimal = Math.random();
// var random = randomDecimal * (countries.length-1);
// var final = Math.floor(random);
}

// var scholars = ["Sophie", "Laurel", 'Caroline', 'Beatriz', 'Miriam', 'Allie', 'Jocelyln', 'Celeste', 'Lina', 'Nitika', 'Jordan', 'Reese', 'Anika', 'Zuri', 'Karla', 'Lauren', 'Elizabeth', 'Ava', 'Anna', 'Jasmin', 'Yazzy' ]
// var button = $('button');
// var scholarhere = $('.scholarhere');
// button.on('click', randomizer);
// function randomizer (){
//   var random = Math.floor(Math.random()*(scholars.length-1));
//   var newscholar = scholars[random];
//   scholarhere.text(newscholar);
// }
