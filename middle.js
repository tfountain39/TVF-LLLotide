
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(array1, array2) {
  const arrayAreEqual = eqArrays(array1, array2);
  arrayAreEqual
    ? console.log(`✅Assertion Passed: ${array1} and ${array2} are equal`)
    : console.log(`🛑Assertion Failed: ${array1} and ${array2} are not equal`);
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } 
  if (array.length % 2 === 0) {
    const evenMiddleIndex1 = array.length / 2 - 1;
    const evenMiddleIndex2 = evenMiddleIndex1 + 1;
    return array.slice(evenMiddleIndex1, evenMiddleIndex2 + 1);
  }
  if (array.length % 2 !== 0) {
  const oddMiddleIndex = Math.floor(array.length/2);
  return array.slice(oddMiddleIndex, oddMiddleIndex + 1);
  }
};


assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5])