function Airport() {
  this.hangar = [];

  // console.log(this.hangar)

}

Airport.prototype.land = function(plane) {

  this.hangar.push(plane);
};

Airport.prototype.takeoff = function(plane) {

  this.hangar.pop(plane);
};

// airport = new Airport()
//
// console.log(airport.land('smth'))
//
// console.log(airport.hangar)
// console.log(airport.land())
