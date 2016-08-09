$('document').ready(function(){
  var robots_arr = []
  $('#winner_banner').hide()

// ORIGINAL ROBOT OBJECT DECLARTION//////////////
  var Robot = function(){
    this.robots = []
  }
/////////////////////////////////////////////////
// DRONE DECLARTION
  var Drone = function(){
    this.drones = []
  }
  Drone.prototype = new Robot()
// BIPEDAL DECLARTION
  var Bipedal = function(){
    this.bipedals = []
  }
  Bipedal.prototype = new Robot()
///ATV DECLARTION
  var ATV = function(){
    this.atvs = []
  }
  ATV.prototype = new Robot()
/////////////////////////////////////////////////
// TYPES OF DRONES
  //FIRST DRONE
  var Darshan = function(){
    this.name = 'Darshan'
    this.attack = Math.floor(Math.random() * (15 - 7 + 1)) + 7
    this.hp = Math.floor(Math.random() * (100 - 80 + 1)) + 80
  }
  Darshan.prototype = new Drone()
  //SECOND DRONE
  var Galen = function(){
    this.name = 'Galen'
    this.attack = Math.floor(Math.random() * (10 - 5 + 1)) + 5
    this.hp = Math.floor(Math.random() * (100 - 90 + 1)) + 90
  }
  Galen.prototype = new Drone()
// TYPES OF BIPEDAL'S////////////////////////////
  //FIRST BIPEDAL
  var Nariko = function(){
    this.name = 'Nariko'
    this.attack = Math.floor(Math.random() * (35 - 20 + 1)) + 20
    this.hp = Math.floor(Math.random() * (50 - 40 + 1)) + 40
  }
  Nariko.prototype = new Bipedal()
  //SECOND BIPEDAL
  var Rabiah = function(){
    this.name = 'Rabiah'
    this.attack = Math.floor(Math.random() * (40 - 25 + 1)) + 20
    this.hp = Math.floor(Math.random() * (45 - 35 + 1)) + 35
  }
  Rabiah.prototype = new Bipedal()
//TYPES OF ATV'S////////////////////////////////////
  //FIRST ATV
  var Billybob = function(){
    this.name = 'Billybob'
    this.attack = Math.floor(Math.random() * (20 - 5 + 1)) + 5
    this.hp = Math.floor(Math.random() * (70 - 60 + 1)) + 60
  }
  Billybob.prototype = new ATV()
  //SECOND ATV
  var Bertha = function(){
    this.name = 'Bertha'
    this.attack = Math.floor(Math.random() * (15 - 10 + 1)) + 10
    this.hp = Math.floor(Math.random() * (80 - 70 + 1)) + 70
  }
  Bertha.prototype = new ATV()

function getBotChoiceAndExecute(){
  var select = $('select')
  var $bot1_val, $bot2_val

  select.on('change', function(){
    var bot_choice1 = $('#robot_select').val()
    var bot_choice2 = $('#robot_select2').val()
      if(bot_choice1 !== 'choose' && bot_choice2 !== 'choose'){
        bot1 = selectObject(bot_choice1)
        bot2 = selectObject(bot_choice2)
      }
  })
  $('#attack_button').on('click', function(){
    attack(bot1, bot2)
  })
}

function selectObject(choice){
  var bot
  if(choice === 'darshan'){
    bot = new Darshan()
  }
  else if(choice === 'galen'){
    bot = new Galen()
  }
  else if(choice === 'nariko'){
    bot = new Nariko()
  }
  else if(choice === 'rabiah'){
    bot = new Rabiah
  }
  else if(choice === 'billybob'){
    bot = new Billybob()
  }
  else{
   bot = new Bertha()
  }
  console.log("choice", bot)
  return bot
}

function attack(bot1,bot2){
  var winner
    if(bot1.hp > 0 && bot2.hp > 0){
      bot1.hp -= bot2.attack
      bot2.hp -= bot1.attack
      console.log("BOT1", bot1.hp)
      console.log("BOT2", bot2.hp)
      if(bot1.hp < 1){
        bot1.hp = 0
        winner = "bot2"
        winningBanner(winner)
        $('#attack_button').attr("disabled", true)
      }
      if(bot2.hp < 1){
        bot2.hp = 0
        winner = "bot1"
        winningBanner(winner)
        $('#attack_button').attr("disabled", true)
      }
      if(bot1.hp === 0 && bot2.hp === 0){
        winner = "tie"
        winningBanner(winner)
      }
      battleStatus(bot1.hp, bot2.hp)
    }
}

function winningBanner(winner){
  var $player1 = $('#input1').val()
  var $player2 = $('#input2').val()
  var $banner = $('#winner-banner')
  var $banner_text = $('#banner_text')

  $('#winner_banner').fadeIn(2000)

  if(winner === "bot1"){
    $banner_text.html(`Congratulations ${$player1}, you beat, ${$player2}!`)
    $banner.append($banner_text)
  }
  else if(winner === "bot2"){
    $banner_text.html(`Congratulations ${$player2}, you beat, ${$player1}!`)
    $banner.append($banner_text)
  }
  else{
    $banner_text.html(`It's a tie! Play again for the tie breaker!`)
    $banner.append($banner_text)
  }
}

function battleStatus(hp1, hp2){
  var status_p = $('#status_text')
  var p_one = $('#input1').val()
  var p_two = $('#input2').val()
  if(p_one === ""){
    p_one = "Player 1"
  }
  if(p_two === ""){
    p_two = "Player 2"
  }
  status_p.html(`${p_one}'s Bot HP: ${hp1}<br>
                ${p_two}'s Bot HP: ${hp2}<br>`)
}

  getBotChoiceAndExecute()
})
