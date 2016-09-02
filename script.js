
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
    this.url = "http://1.bp.blogspot.com/-CTHjkJqQuCg/UutHe-ejSKI/AAAAAAAAAfo/D07mDJ_JyOI/s1600/enemy_keg_melee.gif"
  }
  Darshan.prototype = new Drone()
  //SECOND DRONE
  var Galen = function(){
    this.name = 'Galen'
    this.attack = Math.floor(Math.random() * (10 - 5 + 1)) + 5
    this.hp = Math.floor(Math.random() * (100 - 90 + 1)) + 90
    this.url = "http://1.bp.blogspot.com/-ncxpaMPG53U/UutKn7JRZFI/AAAAAAAAAgA/dTu4Nhgf4O8/s1600/enemy_bomber.gif"
  }
  Galen.prototype = new Drone()
// TYPES OF BIPEDAL'S////////////////////////////
  //FIRST BIPEDAL
  var Nariko = function(){
    this.name = 'Nariko'
    this.attack = Math.floor(Math.random() * (35 - 20 + 1)) + 20
    this.hp = Math.floor(Math.random() * (50 - 40 + 1)) + 40
    this.url = "https://media.giphy.com/media/1Ho8p0CadGicg/giphy.gif"
  }
  Nariko.prototype = new Bipedal()
  //SECOND BIPEDAL
  var Rabiah = function(){
    this.name = 'Rabiah'
    this.attack = Math.floor(Math.random() * (40 - 25 + 1)) + 20
    this.hp = Math.floor(Math.random() * (45 - 35 + 1)) + 35
    this.url = "http://i.imgur.com/BzBgC.gif"
  }
  Rabiah.prototype = new Bipedal()
//TYPES OF ATV'S////////////////////////////////////
  //FIRST ATV
  var Billybob = function(){
    this.name = 'Billybob'
    this.attack = Math.floor(Math.random() * (20 - 5 + 1)) + 5
    this.hp = Math.floor(Math.random() * (70 - 60 + 1)) + 60
    this.url = "http://vignette1.wikia.nocookie.net/metalslug/images/5/55/Jupiter_king.gif/revision/latest?cb=20140801191852"
  }
  Billybob.prototype = new ATV()
  //SECOND ATV
  var Bertha = function(){
    this.name = 'Bertha'
    this.attack = Math.floor(Math.random() * (15 - 10 + 1)) + 10
    this.hp = Math.floor(Math.random() * (80 - 70 + 1)) + 70
    this.url = "http://vignette1.wikia.nocookie.net/metalslug/images/3/3b/Dragon_nosuke.gif/revision/latest?cb=20140801190752"
  }
  Bertha.prototype = new ATV()

function getBotChoiceAndExecute(){
  var select = $('select')

  var bot1, bot2

  select.on('change', function(){
    var bot_choice1 = $('#robot_select').val()
    var bot_choice2 = $('#robot_select2').val()
      if(bot_choice1 !== 'choose' && bot_choice2 !== 'choose'){
        bot1 = selectObjectOne(bot_choice1)
        bot2 = selectObjectTwo(bot_choice2)

        var p_one = $('#input1').val()
        var p_two = $('#input2').val()
        $('#bot_name1').html(p_one)
        $('#bot_name2').html(p_two)
      }
  })
  $('#attack_button').on('click', function(){
    attack(bot1, bot2)
  })
}

function selectObjectOne(choice){
  var bot
  if(choice === 'Darshan'){
    bot = new Darshan()
    $('#left_img').attr('src', bot.url)
  }
  else if(choice === 'Galen'){
    bot = new Galen()
    $('#left_img').attr('src', bot.url)
  }
  else if(choice === 'Nariko'){
    bot = new Nariko()
    $('#right_img').attr('src', bot.url)
  }
  else if(choice === 'Rabiah'){
    bot = new Rabiah()

    $('#left_img').attr('src', bot.url)
  }
  else if(choice === 'Billybob'){
    bot = new Billybob()
  }
  else{
    bot = new Bertha()
    $('#left_img').attr('src', bot.url)
  }
  console.log("choice", bot)
  return bot
}

function selectObjectTwo(choice){
  var bot2
  if(choice === 'Darshan'){
    bot2 = new Darshan()
    $('#right_img').attr('src', bot2.url)
  }
  else if(choice === 'Galen'){
    bot2 = new Galen()
    $('#right_img').attr('src', bot2.url)
  }
  else if(choice === 'Nariko'){
    bot2 = new Nariko()
    $('#right_img').attr('src', bot2.url)
  }
  else if(choice === 'Rabiah'){
    bot2 = new Rabiah
    $('#right_img').attr('src', bot2.url)
  }
  else if(choice === 'Billybob'){
    bot2 = new Billybob()
    $('#right_img').attr('src', bot2.url)
  }
  else{
    bot2 = new Bertha()
    $('#right_img').attr('src', bot2.url)
  }
  console.log("choice", bot2)
  return bot2
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
  status_p.html(`${p_one}'s HP: ${hp1}<br>
                ${p_two}'s HP: ${hp2}<br>`)
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
  status_p.html(`${p_one}'s HP: ${hp1}<br>
                ${p_two}'s HP: ${hp2}<br>`)
}

  getBotChoiceAndExecute()
})
