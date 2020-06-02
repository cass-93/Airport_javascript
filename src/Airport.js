class Airport {

  constructor() {
    this.capacity = 1;
    this.landed_planes = [];
  }
  // _check_capacity() {
  //   if (this.landed_planes.length == this.capacity) {
  //     return false
  //   }
  //   else {
  //     return true
  //   }
  // }

  land(plane) {
    if (this.landed_planes.length === 0) {
      this.landed_planes.push(plane)
      return 'Plane has landed';
    } 
    else {
      throw ('Landing is not possible, airport capacity is full');
    }  
  }
  
  take_off(plane) {
    return 'Plane has taken off';
  }
};

// @avaliable = false
// @full = false
// elsif @landed_planes.count == @capacity
// @avaliable = true
// @full = true
// else
// @full = false
// @avaliable = true
// end
// end