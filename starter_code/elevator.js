/*jshint esversion: 6 */
class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.waitingList = [];
    this.passengers = [];
  }

  start() {this.interval = setInterval(()=>this.update(),1000)}
  stop() {if(this.requests.length)setTimeout(()=>clearInterval(this.interval),3000)}

  update() {

    this.floorUp();
    console.log(`The elevator is at ${this.floor} going ${this.direction}`);
    var that = this;
    this.waitingList.forEach(function(value,index){
      if(that.floor === value.originFloor){
        that._passengersEnter(value,index);
        console.log(`${value.name} has entered the elevator`);
      }
    });
    console.log(this.passengers);
    this.passengers.forEach(function(value,index){
      if(that.floor == value.destinationFloor){
        that._passengersLeave(value,index);
        console.log(`${value.name} has left the elevator`)
      }
    });
  }

  _passengersEnter(value,index) {
    this.passengers= [...this.passengers,...this.waitingList.splice(index,1)];
    this.requests.splice(index,1);
    this.requests.push(value.destinationFloor);
  }
  _passengersLeave(value,index) {
    this.passengers.splice(index,1);
    this.requests.splice(index,1);
  }


  floorUp() {if(this.floor < this.MAXFLOOR) this.floor +=1;}
  floorDown() {if(this.floor > 0)this.floor -=1;}
  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }
  log() { }
}

module.exports = Elevator;
