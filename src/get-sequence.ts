/**
 * Get the sequential order of objects.
 * @param keysArr The array that contains the main array with the ordering.
 * @param aObject The left object to be compared.
 * @param bObject The right object to be compared.
 * @example getSequence(
 *  ['firstName', 'lastName'],
 *  { firstName: 'Robert', lastName: 'Baratheon' },
 *  { firstName: 'John', lastName: 'Snow' }
 * )
 */
const getSequence = (keysArr: string[], aObject: any, bObject: any) => {
  const keysArrLength: number = keysArr.length;
  let aSum: number = keysArrLength;
  let bSum: number = keysArrLength;

  keysArr.forEach((key, index) => {
    // Get the value of current property in both objects
    const aPropertyValue = aObject[key];
    const bPropertyValue = bObject[key];

    // Check which value is greater
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than
    if (aPropertyValue > bPropertyValue) {
      aSum = aSum + (keysArrLength - index);
    } else if (aPropertyValue < bPropertyValue) {
      bSum = bSum + (keysArrLength - index);
    }
  });

  return {
    aSum,
    bSum,
  };
};

export default getSequence;
