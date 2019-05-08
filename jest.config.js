// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/src/setupEnzyme.ts",
  
};