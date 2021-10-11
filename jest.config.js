module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFiles: ['<rootDir>/tests/setup.js'],    // Load Mock setting

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{vue,js,ts}'],
  coverageDirectory: 'coverage',
  
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: 'reports/jest',
        outputName: 'js-test-results.xml',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
      },
    ],
  ],
}
