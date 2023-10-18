export const badEvaluation = (variable) => {
  if (variable === null || variable === undefined || variable === "") {
    console.log("VARIABLE NOT FOUND!");
  } else {
    console.log(variable);
  }
};

export const goodEvaluation = (variable) =>
  console.log(variable || "VARIABLE NOT FOUND!");

export const withoutArrowFunction = function (name) {
  console.log("Hello " + name + "!");
};

export const withArrowFunction = (name) => console.log(`Hello ${name}!`);

export const oldForLoop = () => {
  const array = [1, 2, 3, 4, 5];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

export const newForLoop = () => {
  const array = [1, 2, 3, 4, 5];
  array.forEach((element) => console.log(element));
};

export const withoutImplicitReturn = (a, b) => {
  const result = a + b;
  return result;
};

export const withImplicitReturn = (a, b) => a + b;


export const withoutImplicitObject = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

export const withImplicitObject = (name, age) => ({ name, age });


export const withoutDefaultParameter = (name, age) => {
  if (name === undefined) {
    name = "John Doe";
  }
  if (age === undefined) {
    age = 18;
  }
  return { name, age };
};

export const withDefaultParameter = (name = "John Doe", age = 18) => ({
  name,
  age,
});

export const withoutUseMapFilterReduce = () => {
  let distances = [
    { from: "New York", to: "Dhaka", distance: 12654 },
    { from: "Sydney", to: "chittagong", distance: 8858 },
    { from: "Kolkata", to: "Sylhet", distance: 670 },
  ];

  let total = 0;
  for (let i = 0; i < distances.length; i++) {
    if (distances[i].distance < 10000) {
      total += distances[i].distance * 0.621371;
    }
  }
  console.log(total);
};

export const withUseMapFilterReduce = () => {
  let distances = [
    { from: "New York", to: "Dhaka", distance: 12654 },
    { from: "Sydney", to: "chittagong", distance: 8858 },
    { from: "Kolkata", to: "Sylhet", distance: 670 },
  ];

  let total = distances
    .filter((item) => item.distance < 10000)
    .map((item) => item.distance * 0.621371)
    .reduce((prev, distance) => prev + distance, 0);
  console.log(total);
};
