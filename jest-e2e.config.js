module.exports = {
  verbose: true,
  silent: false,
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
      'ts-config': 'tsconfig.json',
    },
  },
  testRegex: '.e2e-spec.ts$',
  preset: 'ts-jest',
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  moduleDirectories: [
    '<rootDir>',
    'node_modules',
  ],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}