console.log("JS Objects");

// // Create an object:
// var car = {brand:"Mini", height:200, age:12, color:"blue"};
//
// // Display some data from the object:
// document.getElementById("demo").innerHTML =
// "The " + car.brand + " is " + car.age + " years old and is the color " + car.color + ".";
//

document.getElementById('dogOne').addEventListener('click',function dog(){

var dog = {species:"Pug", weight:20, age:7, color:"charcoal", photo:"img/pug.jpg"};

document.getElementById("action").innerHTML =
"The " + dog.species + " is " + dog.weight + " kgs.";

document.getElementById("action").innerHTML += '<br/><img class="img-thumbnail" src="' + dog.photo + '" alt="dogOne">';

});




// Second dogs properties

document.getElementById('dogTwo').addEventListener('click',function dogTwo(){

var dogTwo = {species:"Labrador", male:"true", age:14, color:"cream", photo:"img/labrador.jpg"};

return dog;
dog.name="Tiger";
console.log(dog.name);
$('#resultTwo').hide();
$('#result').show();
document.getElementById("result").innerHTML =
"The " + dogTwo.species + " is " + dogTwo.age + " years old.";

if (dogTwo.male === "true") {
  document.getElementById("result").innerHTML += "</br> The gender of the dog is male.";
} else {
  document.getElementById("result").innerHTML += "</br> The gender of the dog is female.";
}

document.getElementById("action").innerHTML += '<br/><img class="img-thumbnail" src="' + dogTwo.photo + '" alt="dogTwo">';

});

document.getElementById('change').addEventListener('click', function(){
  var changedName=document.getElementById('dogName').value;
  console.log(changedName);

  var newObject = dog();
  console.log(newObject);
}
