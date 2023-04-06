class Vehicle {
  constructor(public color: string) {
    
  }

  protected honk(): void {
    console.log(`beep`);
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
  private drive(): void {
    console.log(`vroom`);
    console.log(this.wheels, this.color)
  }
  callDrive(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'orange');
car.callDrive();
