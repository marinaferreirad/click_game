/* VARIABLES GLOBALES */ 

var button = document.getElementById('clickme');
var original_earning = document.getElementById('original_earning');
var houses_earning = document.getElementById('houses_earning');
var buildings_earning = document.getElementById('buildings_earning');
var money = document.getElementById('money');
var happiness = document.getElementById('happiness');



/* IMPOTS EN FONCTION DES LOGEMENTS ET BATIMENTS ACHETÉS */

//quand on achete quelque chose 
//son .number augmente de 1 
//son prix est ajouté à total_houses_earning ou a total_taxes
//le nombre total d habitants augmente du nombre d habitant du logement 
//son prix est multiplié par 1.5 si il coûte plus que 5000

//this.number++


/* CALCUL DE L'ARGENT GÉNÉRÉ AU CLIC EN FONCTION DES IMPÔTS ET AUTOMATIQUEMENT EN FONCTION DES BATIMENTS PUBLICS */ 

var total_houses_earning = 1;
var total_money = 0;
var total_taxes = 0;
var new_taxes = 10;
var total_earning = 0;

function recovering_taxes() {
  var intervalTaxes = setInterval(newTaxes, 100);
}

button.onclick = function() {
	var one = 1;
    total_earning = total_houses_earning + one;
	original_earning.innerHTML = "Original Earning (+1ℂ) : " + one + "ℂ";
    houses_earning.innerHTML = "Houses Earning (+1ℂ) : " + total_houses_earning + "ℂ";
    total_money = total_money + total_earning;
};

function newTaxes() {
  total_taxes = new_taxes;
  buildings_earning.innerHTML = "Building Earning : " + total_taxes + "ℂ";
  total_money = total_money + total_taxes
  money.innerHTML = "Money : " + total_money + "ℂ";
}

recovering_taxes();


// NOMDUJSON[1( aka deuxième dans la liste)].price;

var div_list_element_click = document.querySelectorAll('.private');
for (var i = 0 ; i < div_list_element_click.length ; i++ ){
	div_list_element_click[i].addEventListener('click', function(e){
		var current = this.id;
		console.log(current);
		console.log(accomodation_dtb.castle.price);
		if(total_money >= van.price){
			van.number ++;
			total_money = total_money - van.price;
		//console.log(van.number);
	}
	if(total_money < van.price){
		//console.log('trop cher');
	}
});
}


/* CHANGEMENT D'ONGLET */ 


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



/* JSON LOGEMENTS */ 

var accomodation_dtb;

accomodation_dtb = {
  "van": {
    "price": 50,
    "number": 0,
    "happiness": -2,
    "inhabitant": 2,
    "earning": 2,
    "unlocked": 0
  },
  "hut": {
    "price": 500,
    "number": 0,
    "happiness": 0,
    "inhabitant": 3,
    "earning": 3,
    "unlocked": 0
  },
  "small_house": {
    "price": 2500 ,
    "number": 0,
    "happiness": 1,
    "inhabitant": 4,
    "earning": 4,
    "unlocked": 1
  },
  "hlm": {
    "price": 5000,
    "number": 0,
    "happiness": -5,
    "inhabitant": 60,
    "earning": 60,
    "unlocked": 1
  },
  "house_garden": {
    "price": 62500,
    "number": 0,
    "happiness": 10,
    "inhabitant": 4,
    "earning": 8,
    "unlocked": 2
  },
  "allotment": {
    "price": 300000,
    "number": 0,
    "happiness": 0,
    "inhabitant": 50,
    "earning": 50,
    "unlocked": 2
  },
  "small_building": {
    "price": 2000000,
    "number": 0,
    "happiness": 2,
    "inhabitant": 30,
    "earning": 140,
    "unlocked": 3
  },
  "villa": {
    "price": 8000000,
    "number": 0,
    "happiness": 10,
    "inhabitant": 8,
    "earning": 80,
    "unlocked": 4
  },
  "building": {
    "price": 70000000,
    "number": 0,
    "happiness": 6,
    "inhabitant": 350,
    "earning": 700,
    "unlocked": 5
  },
  "skyscraper": {
    "price": 400000000,
    "number": 0,
    "happiness": 10,
    "inhabitant": 1500,
    "earning": 9000,
    "unlocked": 7
  },
  "palace": {
    "price": 1000000000,
    "number": 0,
    "happiness": 80,
    "inhabitant": 2000,
    "earning": 20000,
    "unlocked": 8
  },
  "castle": {
    "price": 5000000000,
    "number": 0,
    "happiness": 300,
    "inhabitant": 5,
    "earning": 50,
    "unlocked": 9
  }
}
console.log(accomodation_dtb.van.price);




/* JSON BATIMENTS */ 

var public_building_dtb;

public_building_dtb = {
  "road": {
    "price": 2000,
    "number": 0,
    "happiness": 3,
    "unlocked": 0,
    "taxes": 2
  },
  "shop": {
    "price": 3000,
    "number": 0,
    "happiness": 10,
    "unlocked": 1,
    "taxes": 5
  },
  "school": {
    "price": 10000,
    "number": 0,
    "happiness": 20,
    "unlocked": 2,
    "taxes": 0
  },
  "bus": {
    "price": 20000,
    "number": 0,
    "happiness": 15,
    "unlocked": 2,
    "taxes": 0
  },
  "restaurant": {
    "price": 50000,
    "number": 0,
    "happiness": 30,
    "unlocked": 3,
    "taxes": 100
  },
  "police_station": {
    "price": 100000,
    "number": 0,
    "happiness": 45,
    "unlocked": 3,
    "taxes": 0
  },
  "public_lighting": {
    "price": 1000000,
    "number": 0,
    "happiness": 60,
    "unlocked": 3,
    "taxes": 0
  },
  "hospital": {
    "price": 1000000,
    "number": 0,
    "happiness": 50,
    "unlocked": 4,
    "taxes": 0
  },
  "hotel": {
    "price": 2000000,
    "number": 0,
    "happiness": 10,
    "unlocked": 4,
    "taxes": 500
  },
  "hotel": {
    "price": 300000,
    "number": 0,
    "happiness": 30,
    "unlocked": 4,
    "taxes": 300
  },
  "fire_station": {
    "price": 500000,
    "number": 0,
    "happiness": 50,
    "unlocked": 4,
    "taxes": 0
  },
  "jail": {
    "price": 100000,
    "number": 0,
    "happiness": -100,
    "unlocked": 5,
    "taxes": 0
  },
  "swimming_pool": {
    "price": 5000000,
    "number": 0,
    "happiness": 90,
    "unlocked": 5,
    "taxes": 20
  },
  "church": {
    "price": 1000000,
    "number": 0,
    "happiness": 100,
    "unlocked": 5,
    "taxes": 0
  },
  "mall": {
    "price": 300000000,
    "number": 0,
    "happiness": 70,
    "unlocked": 6,
    "taxes": 300
  },
  "railway_station": {
    "price": 20000000,
    "number": 0,
    "happiness": 100,
    "unlocked": 6,
    "taxes": 0
  },
  "night_club": {
    "price": 2000000,
    "number": 0,
    "happiness": 70,
    "unlocked": 6,
    "taxes": 200
  },
  "tube": {
    "price": 3000000,
    "number": 0,
    "happiness": 120,
    "unlocked": 7,
    "taxes": 0
  },
  "brothel": {
    "price": 1000000,
    "number": 0,
    "happiness": -200,
    "unlocked": 7,
    "taxes": 800
  },
  "monument": {
    "price": 50000000,
    "number": 0,
    "happiness": 150,
    "unlocked": 7,
    "taxes": 0
  },
  "business_center": {
    "price": 500000000,
    "number": 0,
    "happiness": 0,
    "unlocked": 7,
    "taxes": 1000
  },
  "optic_fibre": {
    "price": 750000000,
    "number": 0,
    "happiness": 250,
    "unlocked": 8,
    "taxes": 1000
  },
  "zoo": {
    "price": 1000000000,
    "number": 0,
    "happiness": 500,
    "unlocked": 9,
    "taxes": 20
  },
  "zoo": {
    "price": 1000000000,
    "number": 0,
    "happiness": 500,
    "unlocked": 9,
    "taxes": 20
  },
  "airport": {
    "price": 5000000000,
    "number": 0,
    "happiness": -300,
    "unlocked": 9,
    "taxes": 10000
  },
}



/* VERIFICATIONS DES NIVEAUX */

var HTML_level = document.getElementById('level');
var level; 

function passing_levels(level, inhabitant, happiness, road, school, police_station, hospital, jail, railway_station, tube){
  level = 0;
  HTML_level.innerHTML = "Level : " + level ;
  if (inhabitant >= 2 && road.number >= 1){
    level = 1;
    HTML_level.innerHTML = "Level : " + level ;
    if (inhabitant >= 8 && road.number >= 1){
      level = 2;
      console.log(level);
      if (inhabitant >= 100 && school.number >= 1 && happiness >= 15){
        HTML_level.innerHTML = "Level : " + level ;
        console.log(level);
        if (inhabitant >= 1000 && police_station.number >= 1 && happiness >= 100){
          HTML_level.innerHTML = "Level : " + level ;
          console.log(level);  
          if (inhabitant >= 5000 && hospital.number >= 1 && happiness >= 250){
            HTML_level.innerHTML = "Level : " + level ;
            console.log(level);  
            if (inhabitant >= 20000 && jail.number >= 1 && happiness >= 250){
              HTML_level.innerHTML = "Level : " + level ;
              console.log(level);
              if (inhabitant >= 80000 && railway_station.number >= 1 && happiness >= 500){
                HTML_level.innerHTML = "Level : " + level ;
                console.log(level);
                if (inhabitant >= 200000 && tube.number >= 1 && happiness >= 900){
                  HTML_level.innerHTML = "Level : " + level ;
                  console.log(level);
                  if (inhabitant >= 1000000){
                    HTML_level.innerHTML = "Level : " + level ;
                    console.log(level);
                    if (happiness >= 10000){
                      HTML_level.innerHTML = "Level : " + level ;
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






/* RECHERCHES */ 

// Compteur de la somme d'argent au total par clic
//var money = document.getElementById('money');
//
//buy_van.onclick = function() {
//	van.number ++;
//	money = money - van.price;
//};
//
//var test = document.getElementById('imgvan');
//var van_properties = document.getElementsByClassName('van_properties');
//
//test.onclick = function() {
//	function van(price, number, happiness, inhabitant, earning) {
//		this.price = 50;
//		this.number = 0;
//		this.happiness = -2;
//		this.inhabitant = 2;
//		this.earning = 2;
//		van_properties.innerHTML = "Prix = " + this.price + "ℂ </br> Nombre = " + this.number;
//	}
//}
//
//var van_properties = document.getElementsByClassName('van_properties')
//
//
//var obj = {a:1, b:2, c:3};
//    
//for (var prop in obj) {
//  console.log("obj." + prop + " = " + obj[prop]);
//}

// Affiche dans la console :
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
