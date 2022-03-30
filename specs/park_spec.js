const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 25);
    dinosaur3 = new Dinosaur('pterodactyl', 'omnivore', 20);
    dinosaur4 = new Dinosaur('stegosaurus', 'herbivore', 30);
    dinosaur5 = new Dinosaur('pterodactyl', 'omnivore', 28);
    park = new Park('Jurassic Park', 50, [dinosaur1, dinosaur2, dinosaur3]);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(dinosaur2);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.findAttractiveDinosaur();
    assert.deepStrictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur5);
    const actual = park.findAllDinosaursBySpecies('pterodactyl');
    const expected = [dinosaur3, dinosaur5];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.calculateTotalVisitorsDay();
    assert.strictEqual(actual, 153);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const actual = park.calculateTotalVisitorsYear();
    assert.strictEqual(actual, 34675);
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.calculateTotalRevenueYear();
    assert.strictEqual(actual, 1733750);
  });

});
