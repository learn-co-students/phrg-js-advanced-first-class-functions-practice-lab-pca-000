// Code your solution in this file!
const logDriverNames = function (driverArray) {
  driverArray.forEach(function (driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function (driverArray, location) {
  driverArray.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function (driverArray) {
  newArray = driverArray.slice()

  newArray.sort(function (first, second) {
    return first.revenue - second.revenue
  })
  return newArray
}

const driversByName = function (driverArray) {
  newArray = driverArray.slice()

  newArray.sort(function (first, second) {
    return first.name.localeCompare(second.name)
  })
  // console.log(newArray)
  return newArray
}

const addRevenue = function (total, driver) {
  return total + driver.revenue
}

const totalRevenue = function (driverArray) {
  return driverArray.reduce(addRevenue, 0)
}

const averageRevenue = function (driverArray) {
  return totalRevenue(driverArray) / driverArray.length
}
