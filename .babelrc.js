module.exports = (api) => {
  api.cache.forever();

  return {
    presets: ['module:next/babel'],
    plugins: ['module:markdown-in-js/babel'],
  };
};
