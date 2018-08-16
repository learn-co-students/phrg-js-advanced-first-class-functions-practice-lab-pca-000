const logDriverNames = function(driverNames) {
  driverNames.forEach(function(driver) {
    console.log(driver.name)
  })
};

const logDriversByHometown = function(driverNames, location) {
  driverNames.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
};

const driversByRevenue = function(driverNames) {
  orderedDrivers = driverNames.slice()
    orderedDrivers.sort(function (first, second) {
      return first.revenue - second.revenue
    })
    return orderedDrivers
};

const driversByName = function(driverNames) {
  orderedDrivers = driverNames.slice()
    orderedDrivers.sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })
    return orderedDrivers;
}

const addRevenue = function(total, driver) {
  return total + driver.revenue
};

const totalRevenue = function (driverNames) {
  return driverNames.reduce(addRevenue, 0)
};

const averageRevenue = function(driverNames) {
  return (totalRevenue(driverNames) / (driverNames.length))
};
