module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@core': './src/core',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@store': './src/store',
          '@translations': './src/translations',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
