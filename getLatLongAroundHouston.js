const getLatLongAroundHouston = (radius, timeUnit) => {
  // angle in radians
  const theta = (-timeUnit / 450) * Math.PI;
  const x = radius * Math.cos(theta);
  const y = radius * Math.sin(theta);
  const lat = x - 95.3698;
  const long = y + 29.7604;
  return { lat, long };
};

const assert = require("assert");

const radius = 10;
const timeUnit = 0;

console.log(getLatLongAroundHouston(radius, timeUnit));

// assert.equal(getLatLongAroundHouston(radius, angle));
