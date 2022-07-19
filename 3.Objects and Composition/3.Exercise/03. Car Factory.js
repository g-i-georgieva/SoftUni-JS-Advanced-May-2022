function demoFactory(object) {
  let car = {};

  car.model = object.model;

  if (object.power <= 90) {
    car.engine = {
      power: 90,
      volume: 1800,
    };
  } else if (object.power <= 120) {
    car.engine = {
      power: 120,
      volume: 2400,
    };
  } else {
    car.engine = {
      power: 200,
      volume: 3500,
    };
  }

  car.carriage = {
    type: object.carriage,
    color: object.color,
  };

  if (object.wheelsize % 2 == 0) {
    object.wheelsize--;
  }
  let wheels = [0,0,0,0]
  car.wheels = wheels.fill(object.wheelsize)
  // car.wheels = [
  //   object.wheelsize,
  //   object.wheelsize,
  //   object.wheelsize,
  //   object.wheelsize,
  // ];

  return car;
}
console.log(
  demoFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
