const getLatLongAroundHouston = secondOfTheHour => {
  const theta = (-secondOfTheHour / 450) * Math.PI;
  const radius = 5; // about 500km
  const x = radius * Math.cos(theta);
  const y = radius * Math.sin(theta);
  const lat = y + 29.761993;
  const long = x - 95.366302;
  return { lat, long };
};

const assert = require('assert');

const secondOfTheHour = 0;

const result = getLatLongAroundHouston(radius, secondOfTheHour);

console.log(`${result.lat},${result.long}`);

// assert.equal(getLatLongAroundHouston(radius, angle));
