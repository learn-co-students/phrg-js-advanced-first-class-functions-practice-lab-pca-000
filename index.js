// Code your solution in this file!
function logDriverNames (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

function logDriversByHometown (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

function driversByRevenue (drivers) {
  newDrivers = [...drivers]
  newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return newDrivers
};

function driversByName (drivers) {
  newDrivers = [...drivers]
  newDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  });
  return newDrivers
};

function totalRevenue (drivers) {
  const totalFinder = function (agg, el, i, arr) {
    return agg + el.revenue
  }
  return drivers.reduce(totalFinder, 0);
};

function averageRevenue (drivers) {
  return totalRevenue(drivers) / drivers.length
};
