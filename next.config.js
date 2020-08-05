const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [
      require('@mapbox/rehype-prism'),
    ],
  },
});

module.exports = withMDX({
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/install': { page: '/install' },
    };
  },
});
