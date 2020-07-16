/**
 * Regular Expression to validate JavaScript object's property names.
 * @type {RegExp}
 */
const regExJSPropertyNames = /^(?![0-9])[a-zA-Z0-9$_]+$/;

/**
 * Validate if the passed keys are valid.
 * @param keys {string} The object keys separated by spaces.
 * @param split_char {string} The char that will be used to split the keys.
 * @example validateKeys("firstName lastName country")
 * @returns "true" if the passed keys are valid; otherwise, "false".
 */
function validateKeys(keys: string, split_char = ' '): boolean {
  const hasInvalidKeys: boolean = keys
    .split(split_char)
    .some(k => regExJSPropertyNames.test(k) === false);

  return !hasInvalidKeys;
}

export default validateKeys;
