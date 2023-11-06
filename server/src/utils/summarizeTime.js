const summarizeTime = (fromDate) => {
    let from = fromDate.replace(/[\s\n]+/g, "").replace(/\./g, "-").split("-");
    if(fromDate.startsWith("202")) {
      from = from.reverse();
    }
    return `${from[2]}.${from[1]?.toString().padStart(2, "0")}.${from[0]?.toString().padStart(2, "0")}`
  }
  
const identifyMonth = (num) => {
  let monthName;
    switch (num) {
      case 1:
          monthName = "January";
          break;
      case 2:
          monthName = "February";
          break;
      case 3:
          monthName = "March";
          break;
      case 4:
          monthName = "April";
          break;
      case 5:
          monthName = "May";
          break;
      case 6:
          monthName = "June";
          break;
      case 7:
          monthName = "July";
          break;
      case 8:
          monthName = "August";
          break;
      case 9:
          monthName = "September";
          break;
      case 10:
          monthName = "October";
          break;
      case 11:
          monthName = "November";
          break;
      case 12:
          monthName = "December";
          break;
      default:
          monthName = "Invalid month number";
  }
return monthName;
}
module.exports = {
  summarizeTime,
  identifyMonth
};