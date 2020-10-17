module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  resetMocks: false,
  resetModules: false,
  restoreMocks: false,
  testEnvironment: 'node',
  roots: ['modules']
}
