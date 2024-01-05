// "use strict"
// function x() {
//   console.log(this);
// }

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//     console.log(this.a);
//   },
// };
// obj.x();

//call

const student = {
  name: "ahmed",
  printName: function () {
    console.log(this.name);
  },
};

student.printName()
const student2 = {
  name: "thousif",
};

student.printName.call(student2);
