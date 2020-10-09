//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dateArg) => {
  console.log(dateArg)
  var startTime = dateArg.getTime();
  console.log(startTime)
  var endDate = new Date(startTime + 1000000000000);
  console.log(endDate)
	return endDate;
};
