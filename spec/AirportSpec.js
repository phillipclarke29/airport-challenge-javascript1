describe('Airport', function() {
  var airport
  var plane

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy();
  });

  it('can land a plane', function() {
    airport.land(plane)
    expect(airport.hangar.length).toEqual(1);
  });

  it('allows a plane to take off', function() {
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.hangar.length).toEqual(0);
  });

  it('raises an error when the airport is full', function() {
    airport.land(plane)
    airport.land(plane)
    airport.land(plane)
    airport.land(plane)
    expect(function() {
      airport.land(plane);
    }).toThrowError("Airport Full");
  });

});
