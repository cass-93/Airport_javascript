describe ('Weather', function() {
  let plane;

  beforeEach(function() {
    plane = new Plane();
    weather = new Weather();
  });

  describe ('check weather', function() {
    it ('plane cannot land if weather is stormy', function() {
      expect(weather.stormy(plane)).toEqual('Plane cannot fly');
    });
  });
});
