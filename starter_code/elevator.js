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
  stop() {if(this.requests.length == 0)clearInterval(this.interval)}

  update() {

    this.floorUp();
    this.floorDown();
    console.log(`The elevator is at ${this.floor} going ${this.direction}`);
    this.waitingList.forEach((value,index) =>{
      if(this.floor === value.originFloor){
        this._passengersEnter(value,index);
        console.log(`${value.name} has entered the elevator`);
      }
    });
    console.log(this.passengers);
    this.passengers.forEach((value,index)=>{
      if(this.floor == value.destinationFloor){
        this._passengersLeave(value,index);
        console.log(`${value.name} has left the elevator`);
      }
    });
    this.stop();
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


  floorUp() {
    if(this.floor < this.MAXFLOOR && this.direction ==="up") {
      this.floor +=1;
    }
    else{
      this.direction = "down";
    }
  }
  floorDown() {if(this.floor > 0 && this.direction ==="down"){
    this.floor -=1;
  }
  else{
    this.direction = "up";
  }
}
  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }
  log() { }
}

module.exports = Elevator;
