import areKeysValid from './validators/keys-validator';
import InvalidKeysError from './errors/invalid-keys-error';
import getSequence from './get-sequence';

function prioritySort<T extends Record<string, any>>(
  keys: string,
  order: 'asc' | 'desc' = 'asc'
) {
  if (!areKeysValid(keys)) {
    throw new InvalidKeysError(keys);
  }

  // Replace double spaces to just one
  keys = keys.replace(/\s+/, ' ');

  const keysArr: string[] = keys.split(/\s/);

  return (a: T, b: T) => {
    const aKeys: string[] = Object.keys(a);
    const bKeys: string[] = Object.keys(b);

    if (
      !aKeys.some(ak =>
        keysArr.some(k => k.toLowerCase() === ak.toLowerCase())
      ) ||
      !bKeys.some(bk => keysArr.some(k => k.toLowerCase() === bk.toLowerCase()))
    ) {
      return 0;
    }

    const {aSum, bSum} = getSequence(keysArr, a, b);

    let result = 0;

    if (aSum < bSum) {
      result = -1;
    } else if (aSum > bSum) {
      result = 1;
    }

    return order === 'desc' ? ~result : result;
  };
}

export default prioritySort;
