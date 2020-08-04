module.exports = (api) => {
  api.cache.forever();

  return {
    presets: ['module:next/babel'],
  };
};
