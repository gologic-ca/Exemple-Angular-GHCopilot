module.exports = {
  displayName: "yourlibraryname",
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/src/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
