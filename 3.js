// Setting the object to a variable to use below

const data = {
  Results: [
    {
      Name: "Frank Jones",
      Department: "North America",
      Sales: 2500,
    },
    {
      Name: "Sally Smith",
      Department: "North America",
      Sales: 2200,
    },
    {
      Name: "Ed Kramer",
      Department: "Europe",
      Sales: 1700,
    },
    {
      Name: "Susan Johnson",
      Department: "Asia",
      Sales: 2000,
    },
  ],
}

function salesInfo() {
  // Creating variables to hold a total sale count and the object data
  let total = 0
  let res = data.Results

  res.forEach((salesRep) => {
    let sales = salesRep.Sales

    // Individuals whose figures exceed $2000
    if (sales > 2000) {
      console.log(salesRep.Name)
    }

    // Sum of the sales figures
    total += sales
  })

  // Average sale amount for all employees
  let average = total / res.length
  console.log(average)
}

// Calling
salesInfo()
