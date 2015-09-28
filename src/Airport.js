function Airport() {
this.hangar = [];

// console.log(this.hangar)

}

Airport.prototype.land = function(plane) {

  this.hangar.push(plane);

  // throw new Error("not yet implemented");
};

airport = new Airport()

console.log(airport.land('smth'))

console.log(airport.hangar)
// console.log(airport.land())

