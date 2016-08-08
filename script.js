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
    var Darshan = function(){
      this.attack = Math.floor(Math.random() * (10 - 5 + 1)) + 5
      this.hp = Math.floor(Math.random() * (150 - 100 + 1)) + 100
    }
    Darshan.prototype = new Drone()
//SECOND DRONE
    var Galen = function(){
      this.attack = Math.floor(Math.random() * (15 - 5 + 1)) + 5
      this.hp = Math.floor(Math.random() * (120 - 100 + 1)) + 100
    }
    Galen.prototype = new Drone()

// TYPES OF BIPEDAL'S
//FIRST BIPEDAL
    var Nariko = function(){
      this.attack = Math.floor(Math.random() * (30 - 20 + 1)) + 20
      this.hp = Math.floor(Math.random() * (80 - 60 + 1)) + 60
    }
    Nariko.prototype = new Bipedal()
//SECOND BIPEDAL
    var Rabiah = function(){
      this.attack = Math.floor(Math.random() * (40 - 20 + 1)) + 20
      this.hp = Math.floor(Math.random() * (85 - 50 + 1)) + 50
    }
    Rabiah.prototype = new Bipedal()

//TYPES OF ATV'S
//FIRST ATV
    var BillyBob = function(){
      this.attack = Math.floor(Math.random() * (10 - 3 + 1)) + 3
      this.hp = Math.floor(Math.random() * (200 - 120 + 1)) + 120
    }
    atv1.prototype = new ATV()
//SECOND ATV
    var Bertha = function(){
      this.attack = Math.floor(Math.random() * (5 - 3 + 1)) + 3
      this.hp = Math.floor(Math.random() * (200 - 180 + 1)) + 180
    }
    atv2.prototype = new ATV()

console.log("DRONES --->", Drone1, Drone2, Drone3)
