
function Person(name, id) {
    this.name = name;
    this.id = id;
    this.print = function () {
        return this.name + " " + this.id
    }
}

function Car(model) {
    this.model = model;
    this.driver = null;
    this.passengers = [];
    this.speed = 0;

    this.setDriver = function (person) {
        this.driver = person;
    }

    this.addPassengers = function (passenger) {
        this.passengers[this.passengers.length] = passenger;

    }

    this.printPassengers = function () {
        for (var i = 0; i < this.passengers.length; i++) {
            var info = this.passengers[i].print();
            console.log(info)
        }
    }

    this.getSpeed = function (speed) {
        this.speed = speed;
        console.log("Increase the speed to " + speed);

    }

    this.showDriverAndPassengers = function () {
        console.log(audi.driver.name);
        console.log(audi.driver.id);
        //console.log(audi)
        console.log(audi.model)
    }

}

var Dejan = new Person("Dejan", 123);
var marko = new Person("Marko", 1223323);
var janko = new Person("Janko", 543432);

var audi = new Car("audi");
audi.setDriver(Dejan);
audi.getSpeed(20)

audi.addPassengers(marko);
audi.addPassengers(janko);
audi.showDriverAndPassengers();
audi.printPassengers()
