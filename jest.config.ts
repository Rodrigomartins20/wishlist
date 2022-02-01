export default {
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
}
