import validateKeys from '../src/validators/keys-validator';

describe('validateKeys', () => {
  it('should return true when valid keys are passed', () => {
    expect(validateKeys('firstName')).toBe(true);
    expect(validateKeys('firstName lastName')).toBe(true);
    expect(validateKeys('first_name _lastName')).toBe(true);
    expect(validateKeys('firstName lastName Country')).toBe(true);
    expect(validateKeys('firstName lastName')).toBe(true);
    expect(validateKeys('firstName lastName name3')).toBe(true);
  });

  it('should return false when initiate with number', () => {
    expect(validateKeys('firstName 4head country')).toBe(false);
    expect(validateKeys('1 firstName lastName country')).toBe(false);
    expect(validateKeys('1firstName lastName')).toBe(false);
    expect(validateKeys('1FirstName lastName')).toBe(false);
  });

  it('should return false when passed an empty value', () => {
    expect(validateKeys('')).toBe(false);
    expect(validateKeys('   ')).toBe(false);
  });
});
