// Compteur de base (+1ℂ à chaque clic)
var button = document.getElementById('clickme');
var count = 0;
var original_earning = document.getElementById('original_earning');
var houses_earning = 0;
var buildings_earning = 0;
var money = document.getElementById('money');

button.onclick = function() {
	count ++;
	original_earning.innerHTML = "Original Earning (+1ℂ) : " + count + "ℂ";
	money = money + count + houses_earning + buildings_earning;
	money.innerHTML = "Money (total) :" + money + "ℂ";
};


// Variables objets :

var van = new Object();
van.price = 50; // prix du van : 50ℂ
van.number = 0; // nombre de vans possédés
van.happiness = -2; // -2 de point de bonheur
van.inhabitant = 2; // 2 habitant par van
van.earning = 2; // on gagne 2ℂ par clic

var hut = new Object();
hut.price = 500;
hut.number = 0;
hut.happiness = 0;
hut.inhabitant = 3;
hut.earning = 3; 

var small_house = new Object();
small_house.price = 2500;
small_house.number = 0;
small_house.happiness = 1;
small_house.inhabitant = 4;
small_house.earning = 4; 

var hlm = new Object();
hlm.price = 5000;
hlm.number = 0;
hlm.happiness = -5;
hlm.inhabitant = 60;
hlm.earning = 60; 

var house_garden = new Object();
house_garden.price = 62500;
house_garden.number = 0;
house_garden.happiness = 10;
house_garden.inhabitant = 4;
house_garden.earning = 8; 

var allotment = new Object();
allotment.price = 300000;
allotment.number = 0;
allotment.happiness = 0;
allotment.inhabitant = 50;
allotment.earning = 50; 



//Hover Propriétés :



//Compteur du nombre d'habitants :
var inhabitant = 0;

van.inhabitant + hut.inhabitant + small_house.inhabitant;


/*

var buy_van = document.getElementById('img_van');
var van_properties = document.getElementById('van_properties')




/*












/*
// Compteur de la somme d'argent au total par clic
var money = document.getElementById('money');

button.onclick = function() {
	
}; */

/*

buy_van.onclick = function() {
	van.number ++;
	money = money - van.price;
};




/*
var test = document.getElementById('imgvan');
var van_properties = document.getElementsByClassName('van_properties');

test.onclick = function() {
	function van(price, number, happiness, inhabitant, earning) {
		this.price = 50;
		this.number = 0;
		this.happiness = -2;
		this.inhabitant = 2;
		this.earning = 2;
		van_properties.innerHTML = "Prix = " + this.price + "ℂ </br> Nombre = " + this.number;
	}
}




var van_properties = document.getElementsByClassName('van_properties')


var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Affiche dans la console :
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

*/