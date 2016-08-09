var robots_arr = []
$('#winner_banner').hide()
// ORIGINAL ROBOT OBJECT DECLARTION
var Robot = function(){}

// DRONE DECLARTION
  var Drone = function(){}
  Drone.prototype = new Robot()

// BIPEDAL DECLARTION
  var Bipedal = function(){}
  Bipedal.prototype = new Robot()

// ATV DECLARTION
  var ATV = function(){}
  ATV.prototype = new Robot()

// TYPES OF DRONES
  //FIRST DRONE
    var darshan = new Drone()
      darshan.name = 'darshan'
      darshan.attack = Math.floor(Math.random() * (15 - 7 + 1)) + 7
      darshan.hp = Math.floor(Math.random() * (100 - 80 + 1)) + 80
      robots_arr.push(darshan)
  //SECOND DRONE
    var galen = new Drone()
      galen.name = 'galen'
      galen.attack = Math.floor(Math.random() * (10 - 5 + 1)) + 5
      galen.hp = Math.floor(Math.random() * (100 - 90 + 1)) + 90
      robots_arr.push(galen)
// TYPES OF BIPEDAL'S
  //FIRST BIPEDAL
    var nariko = new Bipedal()
      nariko.name = 'nariko'
      nariko.attack = Math.floor(Math.random() * (35 - 20 + 1)) + 20
      nariko.hp = Math.floor(Math.random() * (50 - 40 + 1)) + 40
      robots_arr.push(nariko)
  //SECOND BIPEDAL
    var rabiah = new Bipedal()
      rabiah.name = 'rabiah'
      rabiah.attack = Math.floor(Math.random() * (40 - 25 + 1)) + 20
      rabiah.hp = Math.floor(Math.random() * (45 - 35 + 1)) + 35
      robots_arr.push(rabiah)
//TYPES OF ATV'S
  //FIRST ATV
    var billybob = new ATV()
      billybob.name = 'billybob'
      billybob.attack = Math.floor(Math.random() * (8 - 3 + 1)) + 3
      billybob.hp = Math.floor(Math.random() * (70 - 60 + 1)) + 60
      robots_arr.push(billybob)
  //SECOND ATV
    var bertha = new ATV()
      bertha.name = 'bertha'
      bertha.attack = Math.floor(Math.random() * (5 - 3 + 1)) + 3
      bertha.hp = Math.floor(Math.random() * (80 - 70 + 1)) + 70
      robots_arr.push(bertha)

console.log(darshan, galen, nariko, rabiah, billybob, bertha)
console.log(robots_arr)

function getBotChoiceAndExecute(){
  var select = $('select')
  var bot_choice1 = $('#robot_select')
  var bot_choice2 = $('#robot_select2')
  var $bot1_val, $bot2_val

  select.on('change', function(){
    $bot1_val = bot_choice1.val()
    $bot2_val = bot_choice2.val()

  })

  $('#attack_button').on('click', function(){
    getBotObject($bot1_val, $bot2_val)
  })
}


function getBotObject(choice1, choice2){
  var select = $('select')
  var selected_bot1, selected_bot2
  if(choice1 !== 'choose' && choice2 !== 'choose'){
    for(key in robots_arr){
      if(choice1 === robots_arr[key].name){
        selected_bot1 = robots_arr[key]
      }
      if(choice2 === robots_arr[key].name){
        selected_bot2 = robots_arr[key]
      }
    }
      // console.log(selected_bot1, selected_bot2)
      attack(selected_bot1, selected_bot2)
  }
}

function attack(bot1, bot2){
  var winner
    if(bot1.hp > bot2.attack){
      bot1.hp -= bot2.attack
      console.log("BOT1", bot1.hp)
    }
    else{
      winner = "bot2"
      winningBanner(winner)
      $('#attack_button').attr("disabled", true)
    }
    if(bot2.hp > bot1.attack){
      bot2.hp -= bot1.attack
      console.log("BOT2", bot2.hp)
    }
    else{
      winner = "bot1"
      winningBanner(winner)
      $('#attack_button').attr("disabled", true)
    }
}

function winningBanner(winner){
  var $player1 = $('#input1').val()
  var $player2 = $('#input2').val()
  var $banner = $('#winner-banner')
  var $banner_text = $('#banner_text')

  $('#winner_banner').fadeIn()

  if(winner === "bot1"){
    $banner_text.html(`Congratulations ${$player1}, you beat, ${$player2}!`)
    $banner.append($banner_text)
  }
  else{
    $banner_text.html(`Congratulations ${$player2}, you beat, ${$player1}!`)
    $banner.append($banner_text)
  }
}

getBotChoiceAndExecute()
