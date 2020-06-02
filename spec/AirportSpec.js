describe ('Airport', function() {
  let airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe ('plane landing', function() {
    it ('plane can land at airport', function() {
      expect(airport.land(plane)).toEqual('Plane has landed');
    });
  });
  
  describe ('plane take off', function() {
    it ('plane can take off from airport', function() {
      expect(airport.take_off(plane)).toEqual('Plane has taken off');
    });
  });

  describe ('plane landing at full airport', function() {
    it ('plane cannot land at full airport', function() {
      airport.land(plane)
      expect(function(){ airport.land(plane); }).toThrow('Landing is not possible, airport capacity is full');
    });
  });
});
