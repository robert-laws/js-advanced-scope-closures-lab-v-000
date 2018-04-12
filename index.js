function produceDrivingRange(range) {
  return function(block1, block2) {
    let b1 = block2.replace(/[^0-9.]/g, "");
    let b2 = block1.replace(/[^0-9.]/g, "");
    let distance = Math.abs(b1 - b2);
    if (distance > range) {
      return `${Math.abs(distance - range)} blocks out of range`;
    } else {
      return `within range by ${Math.abs(distance - range)}`;
    }
  }
}


function produceTipCalculator(percent) {
  return function(bill) {
    return bill * percent
  }
}


function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}