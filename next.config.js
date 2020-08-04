const withMDX = require('@next/mdx')();

module.exports = withMDX({
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/install': { page: '/install' },
    };
  },
});
