function Car(plate, maker, model, price, color) {
  this.plate = plate;
  this.maker = maker;
  this.model = model;
  this.price = price;
  this.color = color;
};
var newCar = []; //input car value push in here

function car() {
  var car = new Car(
    document.getElementById("plate").value,
    document.getElementById("maker").value,
    document.getElementById("model").value,
    document.getElementById("price").value,
    document.getElementById("color").value);

  newCar.push(car);
  console.table(newCar);// console table method
   car.discount(); //Calling discount function 

};

function search() {
let lookCar= document.getElementById("search").value;
const carSearch= newCar.find(searchForCar=> searchForCar.plate === lookCar); //using find method
if(!carSearch){
document.getElementById("not_found").innerHTML="Sorry! licence plate does not match";
}else{
  document.getElementById("searchMaker").innerHTML=carSearch.maker;
  document.getElementById("models").innerHTML=carSearch.model;
  //console.log("car maker "+ carSearch.model);
   
}
}

Car.prototype.discount=function() {
  let price= document.getElementById("price").value;
  let discount=0;

if (price>20000) {
discount= 25;
 }
else if (price<=5000) {
  discount= 10;
} else {
discount=15;
}

function discountPrice(price, discount) {
   return price- ((price*discount)/100);
 }
document.getElementById("demo").innerHTML=" You will get " +discountPrice(price, discount) +"$ after your Discount.";

}



