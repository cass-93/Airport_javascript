describe ('Weather', function() {
  let plane;

  beforeEach(function() {
    plane = new Plane();
    weather = new Weather();
  });

  describe ('check weather', function() {
    it ('plane cannot take off if weather is stormy', function() {
      weather.stormy(plane)
      expect(function(){ weather.stormy(plane); }).toThrow('Plane cannot fly');
    });
  });

    it ('plane can take off if weather is not stormy', function() {
      expect(weather.stormy(plane)).toEqual('Plane can fly');
    });
  });
});
