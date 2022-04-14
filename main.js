import moment from 'moment'

// can only log out using terminal

// var moment = require("moment"); // require
console.log(moment().format())

function testHusky () {
  return 1
}
console.log(testHusky)

// const a = moment().format("MMMM Do YYYY, h:mm:ss a"); // April 13th 2022, 1:02:30 pm
// const b = moment().format("dddd"); // Wednesday
// const c = moment().format("MMM Do YY"); // Apr 13th 22
// const d = moment().format("YYYY [escaped] YYYY"); // 2022 escaped 2022
// const e = moment().format();

// const a = moment("20111031", "YYYYMMDD").fromNow(); // 10 years ago
// const b = moment("20120620", "YYYYMMDD").fromNow(); // 10 years ago
// const c = moment().startOf("day").fromNow(); // 14 hours ago
// const d = moment().endOf("day").fromNow(); // in 10 hours
// const e = moment().startOf("hour").fromNow(); // an hour ago

// const a = moment().subtract(10, "days").calendar(); // 04/03/2022
// const b = moment().subtract(6, "days").calendar(); // Last Thursday at 1:51 PM
// const c = moment().subtract(3, "days").calendar(); // Last Sunday at 1:51 PM
// const d = moment().subtract(1, "days").calendar(); // Yesterday at 1:51 PM
// const e = moment().calendar(); // Today at 1:51 PM
// const f = moment().add(1, "days").calendar(); // Tomorrow at 1:51 PM
// const g = moment().add(3, "days").calendar(); // Saturday at 1:51 PM
// const h = moment().add(10, "days").calendar(); // 04/23/2022

// const a = moment.locale(); // en
// const b = moment().format("LT"); // 1:53 PM
// const c = moment().format("LTS"); // 1:53:06 PM
// const d = moment().format("L"); // 04/13/2022
// const e = moment().format("l"); // 4/13/2022
// const f = moment().format("LL"); // April 13, 2022
// const g = moment().format("ll"); // Apr 13, 2022
// const h = moment().format("LLL"); // April 13, 2022 1:53 PM
// const i = moment().format("lll"); // Apr 13, 2022 1:53 PM
// const j = moment().format("LLLL"); // Wednesday, April 13, 2022 1:53 PM
// const k = moment().format("llll"); // Wed, Apr 13, 2022 1:53 PM

// console.log(a, b, c, d, e);
