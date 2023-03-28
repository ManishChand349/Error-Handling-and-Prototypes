class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }
  getPosition() {
    return this.position;
  }
  getSalary() {
    return this.salary;
  }
}

const employee1 = new Employee("Manish", "Full Stack Developer", 120000);

console.log(employee1.getName());
console.log(employee1.getPosition());
console.log(employee1.getSalary());
