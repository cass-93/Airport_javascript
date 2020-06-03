class Weather {

  constructor(bad_weather = false) {
    this.bad_weather = bad_weather;
  }

  stormy(plane) {
    if (this.bad_weather == true ) {
      throw 'Plane cannot fly';
    }
    else {
      return 'Plan can fly';
    }
  }

};
