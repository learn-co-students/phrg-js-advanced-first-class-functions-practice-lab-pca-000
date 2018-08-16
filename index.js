// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  })
}

// const logDriversByHometown =

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function (drivers) {
  // debugger
  const result = drivers.slice(0).sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue
  })
  return result
}

const driversByName = function (drivers) {
  const result = drivers.slice(0).sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  })
  return result
}

const totalRevenue = function (drivers) {
  let totalRev = 0
  drivers.forEach(function (driver) {
    totalRev += driver.revenue
  })
  return totalRev
}

const averageRevenue = function (drivers) {
  let totalRev = 0
  drivers.forEach(function (driver) {
    totalRev += driver.revenue
    averageRev = (totalRev / drivers.length)
  })
  return averageRev
}
