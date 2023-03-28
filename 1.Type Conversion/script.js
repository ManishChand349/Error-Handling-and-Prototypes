function convertToNumber(str) {
  let num = Number(str);
  if (isNaN(num)) {
    new Error("Invalid number");
  }
  return num;
}
console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));
