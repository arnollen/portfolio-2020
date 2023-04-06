/* eslint-disable no-bitwise */
export async function getData(dataPath) {
  try {
    const response = await fetch(dataPath);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // or another default value appropriate for your use case
  }
}

export function handleCount(theData, count) {
  const setData = theData;
  let theCount = count;
  if (setData.viewed === false) {
    setData.viewed = true;
    theCount += 1;
    if (theCount === 5) {
      console.log('hint hint');
    }
    return theCount;
  }
  return count;
}

export function hexToRgbA(hex, alpha = 1) {
  const hexInt = parseInt(hex.substring(1), 16);

  if (Number.isNaN(hexInt) || hexInt < 0 || hexInt > 0xFFFFFF) {
    throw new Error('Invalid Hex');
  }

  const red = (hexInt >> 16) & 0xFF;
  const green = (hexInt >> 8) & 0xFF;
  const blue = hexInt & 0xFF;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

export function addValueToObject(theObj, prop, value) {
  theObj.map((index) => {
    const newObject = index;
    newObject.prop = value;
    return null;
  });
}

export function diffHours(dt2, dt1) {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function inArray(search, array) {
  const { length } = array;
  for (let i = 0; i < length; i += 1) {
    if (array[i][0] === search) return true;
  }
  return false;
}
