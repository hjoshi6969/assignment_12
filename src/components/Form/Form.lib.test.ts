import { isValid } from './Form.lib';

describe('isValid', () => {
  it('should return true for a valid email', () => {
    const validEmails = [
      'test@example.com',
      'test.user@example.co.uk',
      'test123@test.co',
    ];

    validEmails.forEach((email) => {
      expect(isValid(email)).toBe(true);
    });
  });

  it('should return false for an invalid email', () => {
    const invalidEmails = [
      'test',
      'test@example',
      'test@.com',
      'test@example.',
      'test@examplecom',
    ];

    invalidEmails.forEach((email) => {
      expect(isValid(email)).toBe(false);
    });
  });
});
