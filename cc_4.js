// Anjali Krishna (U35346496)
// Coding challenge-4: Electric Car Class Implementation Challenge
// Taking the "car" class from the previous coding challenge 
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} accelerated and is now going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} braked and is now going at ${this.speed} km/h`);
    }
}
// Extending the Car class to create an EV class that includes current battery charge property 
class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }
    //Implement a `chargeBattery` method in the EV class to set the battery charge to a specified value
    // The charge values are incremental, such that the values are added instead of overriding the previous battery charge value
    chargeBattery(chargeTo) {
        this.charge += chargeTo;
        console.log(`${this.make} charged for ${chargeTo}% and is now at ${this.charge}%`);
    }
    
    // Override the accelerate method in the EV class to increase speed by 20 km/h, decrease battery charge by 1%, and log the new speed and charge level in the console
    // An if/else clause has been utilized to ensure that the car does not accelerate if the battery falls down to 0%. 
    accelerate() {
        if (this.charge > 0) {
            this.speed += 20;
            this.charge -= 1;
            console.log(`${this.make} accelerated and is now going at ${this.speed} km/h, with a charge of ${this.charge}%`);
        } else {
            console.log(`${this.make} cannot accelerate, battery is at 0%`);
        }
    }
}

// Testing the EV Class with all the methods, starting with an initial speed and battery charge 
const ev1 = new EV('Tesla', 120, 23);

console.log("Initial speed of", ev1.make, "is:", ev1.speed, "km/h with a charge of", ev1.charge, "%");

ev1.accelerate();
ev1.brake();
ev1.chargeBattery(50);
ev1.accelerate();
ev1.chargeBattery(20);
ev1.brake();
ev1.accelerate();

console.log(`The latest speed for the ${ev1.make} is ${ev1.speed} km/h with a charge of ${ev1.charge}%`);
