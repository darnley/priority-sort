/**
 * The passed keys are not valid.
 */
class InvalidKeysError extends Error {
  /**
   * Create a new instance of InvalidKeysError.
   * @param keys {string} The passed keys.
   */
  constructor(keys?: string) {
    if (!keys) {
      super('The passed keys are not valid.');
    } else {
      super(`'${keys}' are not valid keys.`);
    }

    this.name = 'InvalidKeysError';
  }
}

export default InvalidKeysError;
