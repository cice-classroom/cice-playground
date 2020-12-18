module.exports = {
  preset: 'ts-jest',
  automock: false,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov', 'json-summary'],
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
}
