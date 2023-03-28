class Car {
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model}.`;
  }
}
const myCar = new Car("BMB", "7 Series", 2023);
console.log(myCar.getDescription()); 
