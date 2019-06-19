// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function(driver){
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

const rsort = function (a, b) {
  return a.revenue - b.revenue;
};
const driversByRevenue = function (drivers) {
  return drivers.slice().sort(rsort);
};

const nsort = function (a, b) {
  return a.name.localeCompare(b.name);
};
const driversByName = function (drivers) {
  return drivers.slice().sort(nsort);
}

const aggregateRevenue = function (agg, el, i, arr) {
  return el.revenue + agg
}
const totalRevenue = function (drivers) {
  return drivers.reduce(aggregateRevenue, 0)
}

 const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
