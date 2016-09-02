describe("creation of variables", function() {

  it("should have robot property", function(){
    var testRobot = new Robot
    expect(testRobot).toBeDefined()
    expect(testRobot.robots).toBeDefined()
  })
  it("should have Drone property", function(){
    var testDrone = new Drone
    expect(testDrone).toBeDefined()
    expect(testDrone.drones).toBeDefined()
  })
  it("should have Bipedal property", function(){
    var testBipedal = new Bipedal
    expect(testBipedal).toBeDefined()
    expect(testBipedal.bipedals).toBeDefined()
  })
  it("should have ATV property", function(){
    var testATV = new ATV
    expect(testATV).toBeDefined()
    expect(testATV.atvs).toBeDefined()
  })
})

describe("creation of drones", function(){
    var darshan = new Darshan
    var galen = new Galen

  it('Darshan should be defined', function(){
    expect(darshan).toBeDefined()
    expect(darshan.name).toBeDefined()
    expect(darshan.url).toBeDefined()
  })

  it("Darshan should have an attack defined range", function(){
    expect(darshan.attack).toBeDefined()
    expect(darshan.attack).toBeGreaterThan(6)
    expect(darshan.attack).toBeLessThan(16)
  })

  it("Darshan should have an hp defined range", function(){
    expect(darshan.hp).toBeDefined()
    expect(darshan.hp).toBeGreaterThan(79)
    expect(darshan.hp).toBeLessThan(101)
  })

  it('should have Galen property', function(){
    expect(galen).toBeDefined()
    expect(galen.name).toBeDefined()
    expect(galen.url).toBeDefined()
  })

  it('Galen should have an attack range', function(){
    expect(galen.attack).toBeDefined()
    expect(galen.attack).toBeGreaterThan(4)
    expect(galen.attack).toBeLessThan(11)
  })

  it('Galen should have an hp range', function(){
    expect(galen.hp).toBeDefined()
    expect(galen.hp).toBeGreaterThan(89)
    expect(galen.hp).toBeLessThan(101)
  })
})

describe("creation of bipedals", function(){
  var nariko = new Nariko
  var rabiah = new Rabiah

  it('Nariko should be defined', function(){
    expect(nariko).toBeDefined()
    expect(nariko.name).toBeDefined()
    expect(nariko.url).toBeDefined()
  })

  it('Nariko should have an attack range', function(){
    expect(nariko.attack).toBeDefined()
    expect(nariko.attack).toBeGreaterThan(19)
    expect(nariko.attack).toBeLessThan(36)
  })

  it('Nariko should have an hp range', function(){
    expect(nariko.hp).toBeDefined()
    expect(nariko.hp).toBeGreaterThan(39)
    expect(nariko.hp).toBeLessThan(51)
  })

  it('Rabiah should be defined', function(){
    expect(rabiah).toBeDefined()
    expect(rabiah.name).toBeDefined()
    expect(rabiah.url).toBeDefined()
  })

  it('Rabiah should have an attack range', function(){
    expect(rabiah.attack).toBeDefined()
    expect(rabiah.attack).toBeGreaterThan(19)
    expect(rabiah.attack).toBeLessThan(41)
  })

  it('Rabiah should have an hp range', function(){
    expect(rabiah.hp).toBeDefined()
    expect(rabiah.hp).toBeGreaterThan(34)
    expect(rabiah.hp).toBeLessThan(46)
  })
})

describe("creation of ATV's", function(){
  var billybob = new Billybob
  var bertha = new Bertha

  it('Billybob should be defined', function(){
    expect(billybob).toBeDefined()
    expect(billybob.name).toBeDefined()
    expect(billybob.url).toBeDefined()
  })

  it("Billybob should have an attack range", function(){
    expect(billybob.attack).toBeDefined()
    expect(billybob.attack).toBeGreaterThan(4)
    expect(billybob.attack).toBeLessThan(21)
  })

  it("Billybob should have an hp range", function(){
    expect(billybob.hp).toBeDefined()
    expect(billybob.hp).toBeGreaterThan(59)
    expect(billybob.hp).toBeLessThan(71)
  })

  it('Bertha should be defined', function(){
    expect(bertha).toBeDefined()
    expect(bertha.name).toBeDefined()
    expect(bertha.url).toBeDefined()
  })

  it('Bertha should have an attack range', function(){
    expect(bertha.attack).toBeDefined()
    expect(bertha.attack).toBeGreaterThan(9)
    expect(bertha.attack).toBeLessThan(16)
  })

  it('Bertha should have an hp range', function(){
    expect(bertha.hp).toBeDefined()
    expect(bertha.hp).toBeGreaterThan(69)
    expect(bertha.hp).toBeLessThan(81)
  })
})

// describe('It should get bot values', function(){
//   // var val1 = bot1
//   document.getElementById(attack_button).click()
//   it('should get first select value', function(){
//     expect(val1).toBeDefined()
//   })
// })

// describe('it should return a bot', function(){
//   var bot1 = selectObjectOne()
//   expect(bot1).toBeDefined()
// })





