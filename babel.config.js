module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          //SOURCE: https://github.com/tleunen/babel-plugin-module-resolver
          components: './src/components',
          constants: './src/constants',
          screens: './src/screens',
          navigation: './src/navigation',
          assets: './src/assets',
        },
      },
    ],
  ],
};
