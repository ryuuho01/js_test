// 問題①

const array = [2, 4, 7, 5, 4, 3, 8];
const filter_result = array.filter(function (item, index, self) {
  return self.indexOf(item) === index;
});
console.log(filter_result)

// 問題②


function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log("This is leap year!")
  }
  else if (year % 400 === 0) {
    console.log("This is leap year!")
  }
  else {
    console.log("This is not leap year")
  }
};

leapYear(2020)
leapYear(2021)