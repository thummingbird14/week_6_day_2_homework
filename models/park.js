const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(newDinosaur) {
    this.dinosaurs.push(newDinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
    for (let i=0; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i] === dinosaur) {
            this.dinosaurs.splice(i,1)
        }
    }
}

Park.prototype.findAttractiveDinosaur = function() {
    let greatest = 0
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay > greatest){
            greatest = dinosaur.guestsAttractedPerDay;
            var popularDinosaur = dinosaur;
        }
    }
    return popularDinosaur;
};

Park.prototype.findAllDinosaursBySpecies = function(species) {
    let dinosaursOfSpecies = [];
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.species === species){
            dinosaursOfSpecies.push(dinosaur);
        }
    }
    return dinosaursOfSpecies;
}

Park.prototype.calculateTotalVisitorsDay = function() {
    let total = 0;
    for (let dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay;
    }
    return total
}

Park.prototype.calculateTotalVisitorsYear = function() {
    let dayTotal = this.calculateTotalVisitorsDay();
    let yearTotal = dayTotal * 365;
    return yearTotal;
}

Park.prototype.calculateTotalRevenueYear = function() {
    let yearlyVisitors = this.calculateTotalVisitorsYear();
    let revenue = yearlyVisitors * this.ticketPrice;
    return revenue;
}
module.exports = Park;