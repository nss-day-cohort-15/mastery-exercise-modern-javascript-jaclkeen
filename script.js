// ORIGINAL ROBOT OBJECT DECLARTION
var Robot = function(){}

// DRONE DECLARTION
  var Drone = function(){

  }
  Drone.prototype = new Robot()

// BIPEDAL DECLARTION
  var Bipedal = function(){

  }
  Bipedal.prototype = new Robot()

// ATV DECLARTION
  var ATV = function(){

  }
  ATV.prototype = new Robot()

// TYPES OF DRONES
//FIRST DRONE
    var Darshan = new Drone()
      Darshan.attack = Math.floor(Math.random() * (10 - 5 + 1)) + 5,
      Darshan.hp = Math.floor(Math.random() * (180 - 150 + 1)) + 100
//SECOND DRONE
    var Galen = new Drone()
      Galen.attack = Math.floor(Math.random() * (15 - 5 + 1)) + 5,
      Galen.hp = Math.floor(Math.random() * (150 - 120 + 1)) + 100

// TYPES OF BIPEDAL'S
//FIRST BIPEDAL
    var Nariko = new Bipedal()
      Nariko.attack = Math.floor(Math.random() * (30 - 20 + 1)) + 20,
      Nariko.hp = Math.floor(Math.random() * (80 - 60 + 1)) + 60
//SECOND BIPEDAL
    var Rabiah = new Bipedal()
      Rabiah.attack = Math.floor(Math.random() * (40 - 20 + 1)) + 20,
      Rabiah.hp = Math.floor(Math.random() * (85 - 50 + 1)) + 50

//TYPES OF ATV'S
//FIRST ATV
    var BillyBob = new ATV()
      BillyBob.attack = Math.floor(Math.random() * (10 - 3 + 1)) + 3,
      BillyBob.hp = Math.floor(Math.random() * (200 - 120 + 1)) + 120
//SECOND ATV
    var Bertha = new ATV()
      Bertha.attack = Math.floor(Math.random() * (5 - 3 + 1)) + 3,
      Bertha.hp = Math.floor(Math.random() * (200 - 180 + 1)) + 180

console.log(Darshan)
console.log(Galen)
console.log(Nariko)
console.log(Rabiah)
console.log(BillyBob)
console.log(Bertha)
