//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, age) => {
  const planetOrbitTimes = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: {
      earthYears: 1.0, 
      earthDays: 365.25,
      seconds: 31557600,
    },
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  }

  let planetNames = Object.keys(planetOrbitTimes)
  let acc = 0

  for (let planetName of planetNames) {

    if(planetName === planet && planet !== 'earth') {
      let planetValueNoEarth = planetOrbitTimes[planetName]
      let number = age / (planetValueNoEarth * planetOrbitTimes["earth"].seconds)
      let fixed = number.toFixed(2)
      acc = parseFloat(fixed)
      return acc
    } 
    
    if (planet === planetName && planet === 'earth') {
      let planetValueEarth = planetOrbitTimes[planetName].seconds
      let number = age / planetValueEarth
      let fixed = number.toFixed(2)
      acc = parseFloat(fixed)
      return acc
    }
  }
    return acc
};
