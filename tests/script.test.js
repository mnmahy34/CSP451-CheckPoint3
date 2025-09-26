import { jest, describe, test, expect, afterEach } from '@jest/globals';

// Mock console.log
const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

// Mock the ./index.js module BEFORE importing script.js
jest.unstable_mockModule('../src/index.js', () => ({
  runExample: jest.fn(() => 'HelloTest'),
}));

// Now import after mocks are set
const { runExample } = await import('../src/index.js');

describe('script.js', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call runExample and log output', async () => {
    // Import script.js (executes the code)
    await import('../src/script.js');

    // Check runExample was called
    expect(runExample).toHaveBeenCalled();

    // Check console.log was called with "Boot:" and the mocked return
    expect(logSpy).toHaveBeenCalledWith('Boot:', 'HelloTest');
  });
});
