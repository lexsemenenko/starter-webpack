const browsersYearsBack = years => {
  return `since ${new Date().getFullYear() - years || '2010'}`;
};

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browserslist: [browsersYearsBack(10), 'not dead']
    },
    autoprefixer: {}
  }
};
