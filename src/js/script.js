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


var tabs = document.querySelectorAll('.tabs a')

for (var i = 0; i < tabs.length; i++){
  tabs[i].addEventListener('click', function(e){
    
    var li = this.parentNode
    var div = this.parentNode.parentNode.parentNode
    
    if (li.classList.contains('active')){
      return false
    }
    
    div.querySelector('.tabs .active').classList.remove('active')
    li.classList.add('active')
    
    div.querySelector('.tab-content.active').classList.remove('active')
    div.querySelector(this.getAttribute('href')).classList.add('active')
  })
}


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

/* VARIABLES BATIMENTS */

var road = new Object();
road.price = 2000; // prix 
road.number = 0; // nombre possédés
road.happiness = 3; // points de bohneur
road.unlocked = 0; // niveau à partir duquel on peut l'acheter
road.taxes = 10; // recettes générées toutes les secondes

var shop = new Object();
shop.price = 3000; 
shop.number = 0;
shop.happiness = 10; 
shop.unlocked = 1; 
shop.taxes = 10; 

var school = new Object();
school.price = 10000; 
school.number = 0;
school.happiness = 20; 
school.unlocked = 2; 
school.taxes = 0; 

var bus = new Object();
bus.price = 20000; 
bus.number = 0;
bus.happiness = 15; 
bus.unlocked = 2; 
bus.taxes = 0; 

var restaurant = new Object();
restaurant.price = 50000; 
restaurant.number = 0;
restaurant.happiness = 30; 
restaurant.unlocked = 3; 
restaurant.taxes = 1000; 

var police_station = new Object();
police_station.price = 100000; 
police_station.number = 0;
police_station.happiness = 45; 
police_station.unlocked = 3; 
police_station.taxes = 0; 

var public_lighting = new Object();
public_lighting.price = 1000000; 
public_lighting.number = 0;
public_lighting.happiness = 40; 
public_lighting.unlocked = 3; 
public_lighting.taxes = 0; 

var hospital = new Object();
hospital.price = 10000000; 
hospital.number = 0;
hospital.happiness = 50; 
hospital.unlocked = 4; 
hospital.taxes = 0; 

var hotel = new Object();
hotel.price = 2000000; 
hotel.number = 0;
hotel.happiness = 10; 
hotel.unlocked = 4; 
hotel.taxes = 5000; 

var concessionaire = new Object();
concessionaire.price = 300000; 
concessionaire.number = 0;
concessionaire.happiness = 30; 
concessionaire.unlocked = 4; 
concessionaire.taxes = 3000; 

var fire_station = new Object();
fire_station.price = 500000; 
fire_station.number = 0;
fire_station.happiness = 50; 
fire_station.unlocked = 4; 
fire_station.taxes = 0; 

var jail = new Object();
jail.price = 100000; 
jail.number = 0;
jail.happiness = -100; 
jail.unlocked = 5; 
jail.taxes = 0; 

var swimming_pool = new Object();
swimming_pool.price = 5000000; 
swimming_pool.number = 0;
swimming_pool.happiness = 90; 
swimming_pool.unlocked = 5; 
swimming_pool.taxes = 200; 

var church = new Object();
church.price = 1000000; 
church.number = 0;
church.happiness = 100; 
church.unlocked = 5; 
church.taxes = 0; 

var mall = new Object();
mall.price = 300000000; 
mall.number = 0;
mall.happiness = 70; 
mall.unlocked = 6; 
mall.taxes = 30000; 

var railway_station = new Object();
railway_station.price = 20000000; 
railway_station.number = 0;
railway_station.happiness = 100; 
railway_station.unlocked = 6; 
railway_station.taxes = 0; 

var night_club = new Object();
night_club.price = 2000000; 
night_club.number = 0;
night_club.happiness = 70; 
night_club.unlocked = 6; 
night_club.taxes = 2000; 


var tube = new Object();
tube.price = 3000000; 
tube.number = 0;
tube.happiness = 120; 
tube.unlocked = 7; 
tube.taxes = 0; 

var brothel = new Object();
brothel.price = 1000000; 
brothel.number = 0;
brothel.happiness = -200; 
brothel.unlocked = 7; 
brothel.taxes = 8000; 

var monument = new Object();
monument.price = 50000000; 
monument.number = 0;
monument.happiness = 150; 
monument.unlocked = 7; 
monument.taxes = 0; 

var business_center = new Object();
business_center.price = 500000000; 
business_center.number = 0;
business_center.happiness = 0; 
business_center.unlocked = 7; 
business_center.taxes = 10000; 

var optic_fibre = new Object();
optic_fibre.price = 750000000; 
optic_fibre.number = 0;
optic_fibre.happiness = 250; 
optic_fibre.unlocked = 8; 
optic_fibre.taxes = 10000; 

var zoo = new Object();
zoo.price = 1000000000; 
business_center.number = 0;
business_center.happiness = 500; 
business_center.unlocked = 9; 
business_center.taxes = 200; 

var optic_fibre = new Object();
business_center.price = 5000000000; 
business_center.number = 0;
business_center.happiness = -300; 
business_center.unlocked = 9; 
business_center.taxes = 100000; 

//Niveau 8 : Capitale
//200 000 habitants 
//1 station de métro 
//900 de bonheur 
//Niveau 9 : Mégalopole
//1 000 0000 habitants 
//1000 de bonheur 
//Niveau 10 : Smart City 
//10 000 de bonheur 

var level = document.getElementById('level');
var happiness = document.getElementById('happiness');
console.log(happiness);

inhabitant = 2000000;
road.number = 2;
school.number = 2;
police_station.number = 1;
happiness = 11000;
hospital.number = 1;
jail.number = 1;
railway_station.number = 1;
tube.number = 1;

function passing_levels(level, inhabitant, happiness, road, school, police_station, hospital, jail, railway_station, tube){
  level = 0;
  console.log(level);
  if (inhabitant >= 2 && road.number >= 1){
    level = 1;
    console.log(level);
    if (inhabitant >= 8 && road.number >= 1){
      level = 2;
      console.log(level);
      if (inhabitant >= 100 && school.number >= 1 && happiness >= 15){
        level = 3;
        console.log(level);
        if (inhabitant >= 1000 && police_station.number >= 1 && happiness >= 100){
          level = 4;
          console.log(level);  
          if (inhabitant >= 5000 && hospital.number >= 1 && happiness >= 250){
            level = 5;
            console.log(level);  
            if (inhabitant >= 20000 && jail.number >= 1 && happiness >= 250){
              level = 6;
              console.log(level);
              if (inhabitant >= 80000 && railway_station.number >= 1 && happiness >= 500){
                level = 7;
                console.log(level);
                if (inhabitant >= 200000 && tube.number >= 1 && happiness >= 900){
                  level = 8;
                  console.log(level);
                  if (inhabitant >= 1000000){
                    level = 9;
                    console.log(level);
                    if (happiness >= 10000){
                      level = 10;
                      console.log(level);
                    }
                  }
                }
              }
            }
          }
        } 
      }
    }
  }
}

passing_levels(level, inhabitant, happiness, road, school, police_station, hospital, jail, railway_station, tube);
