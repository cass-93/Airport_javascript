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
});
