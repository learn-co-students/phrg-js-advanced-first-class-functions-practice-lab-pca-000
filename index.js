// Code your solution in this file!
const cb = function (el) {
  console.log(el["name"])
}

const cb_hometown = function (location) {
  if (el["hometown"] === location) {
    console.log(el["name"])
  }
}

function logDriverNames(drivers) {
  drivers.forEach(cb)
}

function logDriversByHometown(drivers, location) {
  for (const driver of drivers) {
    if (driver["hometown"] === location) {
      console.log(driver["name"])
    }
  }
}
const comparator = function (a, b) {
  if (a["revenue"] > b["revenue"]) {
    return -1
  }
  else if (a["revenue"] === b["revenue"]) {
    return 0
  }
  else {
    return 1
  }
}
const numberSorter = function (num1, num2) {
  return num1.revenue - num2.revenue;
};

function driversByRevenue(drivers) {
  const new_drivers = [...drivers]
  new_drivers.sort(function (a, b) {
    return a.revenue - b.revenue
  })
  return new_drivers
}

function driversByName(drivers) {
  const new_drivers = [...drivers]
  new_drivers.sort(function (a,b) {
    let aName = a.name
    let bName = b.name
      if (aName < bName ) {
        return -1;
      }
      if (aName > bName) {
        return 1;
      }

    return 0
  })
  return new_drivers
}
const addRevenue = function (agg, el, i, arr) {
  return agg + el.revenue
}
function totalRevenue(drivers) {
  const new_drivers = [...drivers]
  const total = new_drivers.reduce(addRevenue, 0)
  return total
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
