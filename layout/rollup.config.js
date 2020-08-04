import babel from '@rollup/plugin-babel';

const pkg = require('./package.json');

export default {
  input: './src/withLayout.js',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true, exports: 'default' },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  external(id) {
    return id === 'react' || id.startsWith('@material-ui');
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
  ],
};
