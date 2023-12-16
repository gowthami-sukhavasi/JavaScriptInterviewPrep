let dog = {
  petName: "Pupper",
  bark: function () {
    console.log("My Name is " + this.petName);
  },
};

let cat = {
  petName: "Kitty",
  meow: () => {
    console.log("My Name is " + this.petName);
  },
};

dog.bark();
cat.meow();
