describe('Airport', function(){
  var airport
  var plane

  beforeEach(function() {
    airport = new Airport();
    // airport = {
    //   plane: function(){

    //   }
    // }
   plane = "plane";
  // });


});


  it('can land a plane', function(){
    airport.land(plane)
    expect(airport.hangar.length).toEqual(1);
  });

});
