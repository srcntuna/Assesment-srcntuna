// In the real world, a man has a mouth. His mouth can do operations like open/close at the man's will.
// ● He can open and close his mouth as he wishes.
// ● Nobody can force a man to open/close his mouth.
// ● A doctor can ask a man to open/close his mouth and a man will do so.
// ● He refuses anyone else who asks him to open/close his mouth other than doctors
// Use OOP Designs to make needed classes with methods to meet those requirements. You can use any language or pseudo-code to write down your results.

class Man {
  constructor(name) {
    this.name = name;
    this.isMouthOpen = true;
  }
}

Man.prototype.openMouth = function () {
  this.isMouthOpen = true;
};

Man.prototype.closeMouth = function () {
  this.isMouthOpen = false;
};

class Doctor {
  constructor(name) {
    this.name = name;
  }
}

Doctor.prototype.openMouth = Man.prototype.openMouth.call(Man);

Doctor.prototype.closeMouth = Man.prototype.closeMouth.call(Man);
