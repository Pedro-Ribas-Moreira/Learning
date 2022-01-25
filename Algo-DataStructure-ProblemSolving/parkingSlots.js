class ParkingLot {
  // Add the methods here
  constructor(slots) {
    this.slots = [];
    let j = 0;
    for (var i = 0; i < slots; i++) {
      j = j + 1;
      this.slots.push(j);
    }
  }
  park(carId) {
    for (let i = 0; i < this.slots.length; i++) {
      slots[i].push(carId);
    }
    console.log(this.slots);
  }
}

const parking = new ParkingLot(5);
parking.park("12");
