var robots_arr = []
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
    var darshan = new Drone()
      darshan.name = 'darshan'
      darshan.attack = Math.floor(Math.random() * (10 - 5 + 1)) + 5
      darshan.hp = Math.floor(Math.random() * (180 - 150 + 1)) + 100
      robots_arr.push(darshan)
  //SECOND DRONE
    var galen = new Drone()
      galen.name = 'galen'
      galen.attack = Math.floor(Math.random() * (15 - 5 + 1)) + 5
      galen.hp = Math.floor(Math.random() * (150 - 120 + 1)) + 100
      robots_arr.push(galen)
// TYPES OF BIPEDAL'S
  //FIRST BIPEDAL
    var nariko = new Bipedal()
      nariko.name = 'nariko'
      nariko.attack = Math.floor(Math.random() * (30 - 20 + 1)) + 20
      nariko.hp = Math.floor(Math.random() * (80 - 60 + 1)) + 60
      robots_arr.push(nariko)
  //SECOND BIPEDAL
    var rabiah = new Bipedal()
      rabiah.name = 'rabiah'
      rabiah.attack = Math.floor(Math.random() * (40 - 20 + 1)) + 20
      rabiah.hp = Math.floor(Math.random() * (85 - 50 + 1)) + 50
      robots_arr.push(rabiah)
//TYPES OF ATV'S
  //FIRST ATV
    var billybob = new ATV()
      billybob.name = 'billybob'
      billybob.attack = Math.floor(Math.random() * (10 - 3 + 1)) + 3
      billybob.hp = Math.floor(Math.random() * (200 - 120 + 1)) + 120
      robots_arr.push(billybob)
  //SECOND ATV
    var bertha = new ATV()
      bertha.name = 'bertha'
      bertha.attack = Math.floor(Math.random() * (5 - 3 + 1)) + 3
      bertha.hp = Math.floor(Math.random() * (200 - 180 + 1)) + 180
      robots_arr.push(bertha)

console.log(darshan, galen, nariko, rabiah, billybob, bertha)
console.log(robots_arr)

function getBotChoice(){
  var $bot1 = $('#robot_select')
  var $bot2 = $('#robot_select2')

  $bot1.on('change', function(){
    $bot1_val = $bot1.val()
    console.log($bot1_val)
    return $bot1_val
  })

  $bot2.on('change', function(){
    $bot2_val = $bot2.val()
    console.log($bot2_val)
    return  $bot2_val
  })
}


function getBotObject(choice){
  console.log(choice)
  var select = $('select');
  var selected_bot;
  select.on('change', function(){
  for(key in robots_arr){
    if(choice === robots_arr[key].name){
      console.log(robots_arr[key].name)
      selected_bot = robots_arr[key].name;
    }
  }
  // console.log(selected_bot)
  })
}

getBotObject(getBotChoice())
