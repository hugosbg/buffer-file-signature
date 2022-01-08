module.exports = {
  preset: 'ts-jest',
  bail: true,
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.spec.ts'],
}
