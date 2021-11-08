function findDate(testDate) {
  // This expression trys to match a zero but will accept 1-9, or checks for a 1 and a following 1 or 2 for the month
  // The day is calculated similarly checking for zero, then 2, then 3 and the following ranges.
  // Lastly this expression just evaluates for years starting with 19 or 20 and then two following digits between 0-9

  let regex =
    /^((0?[1-9]|1[1-2])[- /.](0?[1-9]|[2][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/
  console.log(regex.test(testDate))
}

findDate("12/11/1923")
