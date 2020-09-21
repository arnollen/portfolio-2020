export function getData(dataPath) {
  let getJson = [];
  fetch(dataPath)
    .then((response) => response.json())
    .then((data) => {
      getJson = data;
      return getJson;
    });
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

export function hexToRgbA(hex) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},1)`;
  }
  throw new Error('Bad Hex');
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
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
